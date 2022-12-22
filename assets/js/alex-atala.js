$(document).ready(function(){
    $('.projetos-row').each(function() {
        console.log($(window).width())
        let img = $(this).find('.img')
        let p = $(this).find('p')
        if ($(window).width() > 500) {
            $(img).height($(p).height())
            $(img).css('max-width', $(p).height())
            $(img)
                .removeClass('col-sm-12')
                .removeClass('col-12')
                .removeClass('my-5')
                .removeClass('mx-auto');
            $(p)
                .removeClass('col-sm-12')
                .removeClass('col-12')
                .removeClass('px-0');
            $(this).removeClass('flex-wrap');
        } else {
            $(img)
                .addClass('col-sm-12')
                .addClass('col-12')
                .addClass('my-5')
                .addClass('mx-auto');
            $(p)
                .addClass('col-sm-12')
                .addClass('col-12')
                .addClass('px-0');
            $(this).addClass('flex-wrap');
        }
    });
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: false,
        speed: 300,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});