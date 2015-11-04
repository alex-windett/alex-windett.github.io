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
        projectItem.each(function(index, el) {
            $(this).css('left', '0')
        });

  		if ( $(this).hasClass('active') ) {
  			$(this).removeClass('active').find(projectLogo).show();
             $(this).css('left', '0')
  		} else {
  			var elementPositon  = $(this).position(),
  				elementIndex	= $(this).index()

	  		$(this).addClass('active').find(projectLogo).hide();
	  		$(this).siblings().removeClass('active').find(projectLogo).show();

	  		// Moving all but the first element
	  		if ( elementIndex > 0 && windowWidth >= largeScreenSize ) {
                // Very basic but works
                // $(this).detach().prependTo('.block--grid');
                alert();
                var left        = $(this).position().left,
                    itemWidth   = projectItem.width();

                $(this).animate({
                    left: "-" + left
                }, 'fast' );
                $(this).siblings().animate({
                    left: itemWidth + 20 // Componsating for extra space
                }, 'fast' );
	  		}


	  	}
  	})
});