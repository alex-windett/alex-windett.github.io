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
		});
	}
}

var forms = {

	init: function() {
		$('form').superLabels({
		    labelLeft: 15,
		    labelTop: 5
		});
	},

	randomGiphy: function( count, searchTerms ) {
		$.ajax({
			url: 'http://api.giphy.com/v1/gifs/search?limit=' + count + '&q=' + searchTerms + '&api_key=dc6zaTOxFJmzC',
			type: 'GET',
			dataType: 'JSON'
			// data: data
		}).success(function(data){
			var gifs = data.data,

				gifsCount = gifs.length; // number of gifs in request
				randomGif = Math.floor(Math.random() * gifsCount) + 1  // random number

				url = gifs[randomGif].images.original.url; // gif url

				$('.form__notification--confirmation').find('img').attr('src', url);
		});
	},

	contact: function() {
		var $contactForm = $('.form__contact');
	    $contactForm.submit(function(e) {
	        e.preventDefault();
	        $.ajax({
	            url: '//formspree.io/windettalex@gmail.com',
	            method: 'POST',
	            data: $(this).serialize(),
	            dataType: 'json',
	            success: function(data) {
	            	forms.randomGiphy( 100, 'funny+animals' );
	            	$contactForm.hide();
	            	$('.form__notification--confirmation').show();
	            },
	            error: function(err) {
	                $('.form__notification--error').show();
	            }
	        });
	    });
	}
}


$(document).ready(function() {

    // Syntax highlighting
    hljs.initHighlightingOnLoad();

    header.init();

    projects.ga();

    forms.init();
    forms.contact();


    $('a.no-link').on('click', function(e){
    	e.preventDefault();
    })
});
