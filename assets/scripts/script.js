$(document).ready(function(){

    var windowWidth = $(window).width();
        largeScreenSize = 640,

	// ++++++++++++++++++++++++++++++++
    // Navigation
    // ++++++++++++++++++++++++++++++++
	$('header .burger-bar').on('click', function() {
		$(this).toggleClass('cross');
		$('.header-menu').slideToggle().toggleClass('revelaed');;
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

    var projectItem 	= $('.block--grid li'),
        projectDetails	= $('article'),
        projectLogo		= $('.project--logo'),
        projectPreview	= $('.project--preview');

  	projectItem.click(function(){
        projectItem.each(function() {
            $(this).css('left', '0')
        });

  		if ( $(this).hasClass('active') ) {
  			$(this).removeClass('active').find(projectLogo).show();
            $(this).css('left', '0')
  		} else {

  			var elementPositon  = $(this).position(),
  				elementIndex	= $(this).index(),
                left            = $(this).position().left,
                itemWidth       = projectItem.width();

            if ( elementIndex == 1 || elementIndex % 4 === 0 ) {

                $(this).animate({
                    left: -Math.abs(left)
                }, 'fast' );
                $(this).prev().animate({
                    left: itemWidth + 13 // Componsating for extra space
                }, 'fast' );

            } else if ( elementIndex == 2 || elementIndex % 5 === 0 ) {

                $(this).animate({
                    left: -Math.abs(left)
                }, 'fast' );

                var siblingToMove = elementIndex - 1;

                projectItem + $(":nth-child(" + siblingToMove + ")").animate({
                    left: left // Componsating for extra space
                }, 'fast' );

            } else {
                return
            }
	  	}
  	})
});