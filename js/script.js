$(document).ready(function () {
   
        var data;

    $.get('https://jsonplaceholder.typicode.com/posts', function(data){
            
 
        for (let index = 0; index <= 9; index++) {
            let element = data[index];

            var title = element.title;
        	var body = element.body;

            if (body.length >60) {
                body = body.substring(0,60);
            }


            var output =
                ` <li >
              <div class="accordion-question flex">
                <div><p class="headline fs18">${title}</p></div>
                <div ><img class="rotate" src="./images/icon-arrow-down.svg" alt="icon-arrow-down" /></div>
              </div>
              <p class="accordion-answer none">
                ${body}
              </p>
            </li>`;
          
            $('#table').append(output);
            
        }
        

        // Helps to display the body section of the FAQ
        $('.accordion-question').on('click', function () {
            $(this).next().slideToggle('500')
                .siblings('.none').toggle();

                var img = $(this).children('div img');
                    $('div img').not(img).removeClass('rotate');
                    img.toggleClass('rotate');
         
        });

        $('.accordion-question').click(function(){
            $(this).css('font-weight','600');  
        });




    });
  
});


