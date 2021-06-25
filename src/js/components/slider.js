$('.course__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: '40px',
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                // centerMode: true,
                // centerPadding: '10px',
            }
        },
    ]
});

$('.team__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20px',
            }
        }
    ]
});

$('.review__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 3000,
});