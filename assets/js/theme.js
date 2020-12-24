$(document).ready(function () {
    //=======================================================
    // Google map
    //=======================================================
    if ($('#map').length > 0) {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 51.4584218,
            lng: -0.0813982
        });
        map.addMarker({
            lat: 51.4584218,
            lng: -0.0813982
        });
    }
    // carousel slider

   $('.carousel').carousel({
  interval: 5000
})
// theme-slider
    $('#myCarousel').on('slide.bs.carousel', function () {
        interval: 500
    })
    /** select **/
    $(function () {
        function iformats(icon) {
            var originalOption = icon.element;
            console.log(originalOption);
            return '<img src="' + $(originalOption).data('img') + '"></img> ' + icon.text;
        }

        $('.single-social-net-select').select2({
            closeOnSelect: false,
            placeholder: "Select Social option",
            templateSelection: iformats,
            templateResult: iformats,
            escapeMarkup: function (text) {
                return text;
            }
        });
    });
    if ($('.schedule-style > select').length > 0) {
        $('.schedule-style > select').select2({
            placeholder: "Select Social option",
            escapeMarkup: function (text) {
                return text;

            }
        });
    }
    if ($('#slide').length > 0) {
        $('#slide').popup({
            focusdelay: 400,
            outline: true,
            vertical: 'top'
        });
    }
// navbar
    $("#navigation1").navigation();

    /*==========================================================
     banner slider
     ======================================================================*/
    if ($('.banner-slider').length > 0) {
        var bannerSlider = $(".banner-slider");
        bannerSlider.owlCarousel({
            items: 1,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            transitionStyle: "fade",
            smartSpeed: 1000,
            responsive: {
                // breakpoint from 0 up
                0: {
                    nav: false,
                },
                // breakpoint from 480 up
                480: {
                    nav: false,
                },
                // breakpoint from 768 up
                991: {
                    nav: true,
                }
            }
        });
    }
    /*==========================================================
     banner slider
     ======================================================================*/
    if ($('.banner-slider').length > 0) {
        var bannerSlider = $(".banner-slider");
        bannerSlider.owlCarousel({
            items: 1,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            transitionStyle: "fade",
            smartSpeed: 1000,
            responsive: {
                // breakpoint from 0 up
                0: {
                    nav: false,
                },
                // breakpoint from 480 up
                480: {
                    nav: false,
                },
                // breakpoint from 768 up
                991: {
                    nav: true,
                }
            }
        });
    }
/*Video*/
$("#clipping-video").on("hidden.bs.modal",function(){
    $("#iframeYoutube").attr("src"," ");
  });

    // if ($('.play-btn').length > 0) {
    //     $(".play-btn").on("click", function () {
    //         $('.video-popup').fadeIn('slow');
    //     });
    //
    // }
});


