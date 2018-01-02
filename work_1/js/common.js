$(document).ready(function() {

    var fixAffixWidth = function () {
        $('[data-spy="affix"]').each(function () {
            $(this).width($(this).parent().width());
        });
    }
    fixAffixWidth();

    $(window).resize(fixAffixWidth);

    $(window).scroll(function () {
        if (jQuery(window).scrollTop() > 0) {
            jQuery('#logo').css('display', 'none');
            jQuery('#logo1').css('display', 'block');
        } else {
            jQuery('#logo').css('display', 'block');
            jQuery('#logo1').css('display', 'none');
        }
    });

    $(document).ready(function () {
        $('.slider-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });
    });
    $(document).ready(function () {
        $('.partner-cont').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    $(document).ready(function () {
        $('.latest-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
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
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
});