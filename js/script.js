$(document).ready(function(){

    /*
    if ($(window).width() > 750){
        $(document).ready(function(){
            $('div[data-type="background"]').each(function(){
                var $bgobj = $(this); // создаем объект
                $(window).scroll(function() {
                    var yPos = -( ( $(window).scrollTop() - $bgobj.offset().top ) / $bgobj.data('speed')); // вычисляем коэффициент
                    if ($bgobj.hasClass('cover')) yPos = -yPos;
                    // Присваиваем значение background-position
                    var coords = 'center '+ yPos + 'px';
                    // Создаем эффект Parallax Scrolling
                    $bgobj.css({backgroundPosition: coords});
                });
            });
        });
    }
    */

    $('a[href^="#"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
        var $element = $('#'+$(this).attr("href").substr(1));
        if($element.length == 1) { //на странице есть только 1 элемент с указанным якорем
            $('html, body').animate({
                scrollTop: $element.offset().top
            }, 700); // анимируем скролл к элементу
        }
      return false;
    });

    $('.btn-close').click(function(event){
        event.preventDefault();

        $('.popup.dish-details').addClass('animated zoomOut');

        setTimeout(function(){
            $('.popup.dish-details').removeClass('animated zoomIn zoomOut');
            $('.popup.dish-details').addClass('not-visible');
        }, 500);

        return false;
    });

    $('.menu .dish-wrap').click(function(){
        var $num = $(this).index();
        
        $('.popup.dish-details h2').text($(this).find('.dish-name-price .name').text());
        $('.popup.dish-details .dish-image-wrap img').attr('src', $('.dish-texts .' + $num + ' .src').text());
        $('.popup.dish-details .dish-text').html($('.dish-texts .' + $num + ' .text').html());

        $('html, body').animate({
            scrollTop: $(".menu h2").offset().top
        }, 300);

        setTimeout(function(){
            $('.popup.dish-details').addClass('animated zoomIn');
            $('.popup.dish-details').removeClass('not-visible');
        }, 400);
        
    });

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
      });
    });

});
