var header  = {
	init: function() {

	    // Header
	    var menuToggle = $('#js-mobile-menu').unbind();
	    $('#js-navigation-menu').removeClass("show");
	    menuToggle.on('click', function(e) {
	        e.preventDefault();
	        $('#js-navigation-menu').slideToggle(function(){
	            if($('#js-navigation-menu').is(':hidden')) {
	                $('#js-navigation-menu').removeAttr('style');
	            }
	        });
	    });
	}
}

var projects = {

	ga: function() {

		$('.ga-projects').click(function(event){
			event.preventDefault();

			$(this).siblings().slideToggle().toggleClass('hidden revealed');
		})
	}
}


$(document).ready(function() {

    // Syntax highlighting
    hljs.initHighlightingOnLoad();

    header.init();

    projects.ga();
});
