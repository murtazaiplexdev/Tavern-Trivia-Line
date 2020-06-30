$('.movie-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,

    // autoplay: true,
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '140px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 530,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '110px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '85px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 360,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '65px',
                slidesToShow: 1
            }
        }
    ]
});

$(function () {
    $('.movie-nav li').on('click', function () {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });
});