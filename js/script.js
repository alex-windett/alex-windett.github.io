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

var tools = {
	elements: $('.list__projects--tools li, .list__projects--sites li, .heading--lazyload'),
	visible: false,
	init: function () {
		if (this.elements.length) {
			this.elements.css({opacity: 0});
		}
	},
	scroll: function () {
		if (!this.visible) {
			this.elements.each( function(i){

				var bottom_of_object = $('.list__projects--sites').offset().top + 370;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				// if( bottom_of_window > bottom_of_object ){
					$(this).delay( 600 * i ).animate({'opacity':'1'},300, function(){
						this.visible = true;
					});
				// }

			});
		}
	}
};


$(document).ready(function() {

    // Syntax highlighting
    hljs.initHighlightingOnLoad();

    header.init();

    projects.ga();

    forms.init();
    forms.contact();

    tools.init();
    tools.scroll();


    $('a.no-link').on('click', function(e){
    	e.preventDefault();
    })
});
