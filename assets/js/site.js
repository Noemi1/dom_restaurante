$(document).ready(function(){
    // $('.section-bg').height($(document).height());
    $('.sobre-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
    })
    $('.sobre-content-center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
    });
})