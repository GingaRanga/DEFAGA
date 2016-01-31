/* PARALLAX SCROLL JS ========================================================================================================================================= */
$(document).ready(function() {
	
	// Cache the Window object
	var $window = $(window);
	
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
		
		$(window).scroll(function() {
		
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			
			// Move the background
			$bgobj.css({ backgroundPosition: coords });
			
		}); // end window scroll
	});//end header each fxn
	
});//end main fxn

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

