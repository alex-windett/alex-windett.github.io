$(document).ready(function(){

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
  		if ( $(this).hasClass('active') ) {
  			$(this).removeClass('active')
  				   .find(projectLogo).show();
  		} else {
  			var elementPositon = $(this).position();

	  		$(this).addClass('active')
	  			   .find(projectLogo).hide();
	  		$(this).siblings()
	  			.removeClass('active')
	  			.find(projectLogo).show();

	  		if ( elementPositon.left > 0 ) {
			  	$(this).detach().prependTo('.block--grid').fadeIn();
	  		}
	  	}
  	})
});