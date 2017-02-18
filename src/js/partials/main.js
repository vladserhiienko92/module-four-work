$(document).ready(function() {

    $(document).on("click", ".mobile-icon", function() {
        $(".menu").slideToggle();
        if ($(".mobile-icon").hasClass("active")) {
            $(".mobile-icon").removeClass("active");
        } else {
            $(".mobile-icon").addClass("active");
        }
    });

    $(".test-slider").slick({
        "arrows": true,
        "responsive": [
            {
              breakpoint: 992,
              settings: {
                "arrows": false
            }
            }
        ]
    });

    $(document).on("click",".menu-item a, .header-button a, portfolio-button", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(document).on("click",".portfolio-button", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#contact-form').validator();

});