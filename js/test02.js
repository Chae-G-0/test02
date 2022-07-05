$(function () {
    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.reSlide').slick({
        centerMode: true,
        slidesToShow: 5,
        autoplay: true,
        pauseOnHover: false,
    })
})