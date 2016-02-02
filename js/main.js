/* NAVBAR COLLAPSE ON SCROLL JQUERY =========================================================================================================================== */
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* PAGE SCROLLING FEATURE JQUERY - USES EASING PLUGIN ========================================================================================================= */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* CLOSES MOBILE NAV WHEN LINK CLICKED ======================================================================================================================== */
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

