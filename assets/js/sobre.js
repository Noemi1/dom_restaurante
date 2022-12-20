$(document).ready(function(){
    $('.section-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
    })
    $('.sobre-content-center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
    });
})