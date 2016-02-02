//  ***********************
//  $$ Smart resize
//  ***********************
var deBouncer = function($,cf,of, interval){
	// deBouncer by hnldesign.nl
	// based on code by Paul Irish and the original debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced () {
			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap) {
					func.apply(obj, args);
				}
				timeout = null;
			}
			if (timeout) {
				clearTimeout(timeout);
			} else if (execAsap) {
				func.apply(obj, args);
			}
			timeout = setTimeout(delayed, threshold || interval);
		};
	};
	jQuery.fn[cf] = function(fn){  return fn ? this.bind(of, debounce(fn)) : this.trigger(cf); };
};

deBouncer(jQuery,'smartresize', 'resize', 100);

// if ($('html.lt-ie9').length === 0) {
	jQuery(window).smartresize(function () {

		window.newWindowWidth = $(window).width();
		window.newWindowHeight = $(window).height();

		// moving from collapse to desktop
		if (window.windowWidth <= 732 && window.newWindowWidth > 732) {
			// Resize JS
            projectSlider();
		}

		// moving from desktop to collapse
		if (window.windowWidth > 732 && window.newWindowWidth <= 732) {
			// Resize JS
            projectSliderSmall.init();

		}

		// Resize within desktop range
		if (window.windowWidth > 732 && window.newWindowWidth > 732) {
			// Resize JS
		}

		window.windowWidth = $(window).width();
		window.windowHeight = $(window).height();
	});
// }

var projectItem     = $('.block--grid li'),
    projectDetails  = $('article'),
    projectLogo     = $('.project--logo'),
    projectPreview  = $('.project--preview');

function changeState( el ) {
    el.find(projectLogo).hide();
    el.find(projectPreview).show();
    el.find(projectDetails).show();
}

function projectSlider(){

	projectItem.click(function(){

        projectItem.each(function() {
            $(this).css('left', '0')
        });

		if ( $(this).hasClass('active') ) {
    		$(this).removeClass('active').find(projectLogo).show();
            $(this).css('left', '0')

            $(this).find(projectDetails).hide();
            $(this).find(projectPreview).hide();

            $(this).find(projectLogo).show();

		} else {

            $(this).addClass('active');
            $(this).siblings().removeClass('active').find(projectPreview).hide();
            $(this).siblings().find(projectDetails).hide();
            $(this).siblings().find(projectLogo).show();

			var elementPositon  = $(this).position(),
				elementIndex	= $(this).index(),
                left            = $(this).position().left,
                itemWidth       = projectItem.width();

            if ( elementIndex == 0 || elementIndex % 3 === 0 ) {

                $(this).animate({
                    left: 0
                }, 'fast', function(){
                    $this = $(this);
                    changeState( $this )
                });

            }  else if ( elementIndex == 1 || elementIndex % 4 === 0 ) {

                $(this).animate({
                    left: -Math.abs(left)
                }, 'fast', function(){
                    $this = $(this);
                    changeState( $this )
                });
                $(this).prev().animate({
                    left: itemWidth + 13
                }, 'fast' );

            } else if ( elementIndex == 2 || elementIndex % 5 === 0 ) {

                $(this).animate({
                    left: -Math.abs(left)
                }, 'fast', function(){
                    $this = $(this);
                    changeState( $this )
                });

                var siblingToMove = elementIndex - 1;

                $(".block--grid li:nth-child(" + siblingToMove + ")").animate({
                    left: left
                }, 'fast');

            } else {
                return
            }
      	}
    });
}


var projectSliderSmall = {

    init: function() {
        projectItem.click(function(){

            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active')
                $(this).find(projectDetails).hide();
            } else {
                $(this).addClass('active');
                $(this).find('article').show();
                $(this).siblings().find('article').hide
            }
        });
    }
}

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

    if ('serviceWorker' in navigator) {
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('assets/scripts/serviceWorker/sw.js').then(function(reg) {
            console.log(':^)', reg);
            // TODO
        }).catch(function(err) {
            console.log(':^(', err);
        });
    }
});
