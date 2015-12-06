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
