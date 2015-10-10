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


$(document).ready(function() {

    // Syntax highlighting
    hljs.initHighlightingOnLoad();

    header.init();
});
