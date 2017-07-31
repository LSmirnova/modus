$(".ba-about__slider").slick({
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
