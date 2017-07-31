$('.ba-clients__slider').slick({
    infinite: true,
    arrows: true,
    prevArrow: '.ba-clients__slider-btn-prev',
    nextArrow: '.ba-clients__slider-btn-next',
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

