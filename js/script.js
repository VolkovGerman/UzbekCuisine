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

        $('.dish-popup-wrap').removeClass('animated zoomIn');

        $(this).parent().parent().addClass('not-visible');

        return false;
    });

    $('.menu .dish-wrap').click(function(){
        var $num = $(this).index() + 1;
        
        $('.popup.dish-details h2').text($(this).find('.dish-name-price .name').text());
        $('.popup.dish-details .dish-photo img').attr('src', ($('.dish-texts .' + $num + ' .src').text()));
        $('.popup.dish-details .dish-text').html($('.dish-texts .' + $num + ' .text').html());

        $('body').css('overflow', 'hidden');
        $('.popup').css('width', $(window).width());
        $('.popup').css('height', $(window).height());

        $('.popup.dish-details').removeClass('not-visible');
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
