$(function () {
    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.reSlide').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 5,
        autoplay: true,
        pauseOnHover: false,
    })
})