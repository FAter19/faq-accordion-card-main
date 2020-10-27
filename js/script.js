$(document).ready(function () {
   
        var data;

    $.get('https://jsonplaceholder.typicode.com/posts', function(data){
            
 
        for (let index = 0; index <= 9; index++) {
            let element = data[index];

            var title = element.title;
        	var body = element.body;

            if (title.length >11) {
                title = title.substring(0,11);
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
    });



    // Helps to display the body section of the FAQ
    $('.accordion-question').click( function () {
        
        $('.accordion-answer').toggleClass('none');

            var img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        img.toggleClass('rotate');

    });

    $('.accordion-question').click(function(){
        $(this).css('font-weight','600');
    });


  
});


