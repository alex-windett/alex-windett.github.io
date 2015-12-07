$(document).ready(function(){

    var windowWidth = $(window).width(),
        largeScreenSize = 1170;

	// ++++++++++++++++++++++++++++++++
    // Navigation
    // ++++++++++++++++++++++++++++++++
	$('header .burger-bar').on('click', function() {
		$(this).toggleClass('cross');
		$('.header-menu').slideToggle().toggleClass('revelaed');
	});


    // ++++++++++++++++++++++++++++++++
    // General Helpers
    // ++++++++++++++++++++++++++++++++
    $('a.link__removed').click(function(event) {
        event.preventDefault();
    });


    // ++++++++++++++++++++++++++++++++
    // Home Page Projects
    // ++++++++++++++++++++++++++++++++

    if ( windowWidth >= largeScreenSize) {
        projectSlider();
    } else {
        projectSliderSmall.init();
    }
});
