$(document).ready(function(){
    var touch = $('#touch-menu');
    var menu  = $('.menu');
    var menu_open = 0;
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
        if (!menu_open)
            touch.html("Меню &uarr;");
        else
            touch.html("Меню &darr;");
        menu_open = !menu_open;
    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

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

    $('.dishes-menu .dish-wrap').click(function(){
        var $num = $(this).index();
        
        $('.popup.dish-details h2').text($(this).find('.dish-name-price .name').text());
        $('.popup.dish-details .dish-image-wrap img').attr('src', $('.dish-texts .' + $num + ' .src').text());
        $('.popup.dish-details .dish-text').html($('.dish-texts .' + $num + ' .text').html());

        $('html, body').animate({
            scrollTop: $(".dishes-menu h2").offset().top
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
