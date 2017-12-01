var
	root = $(document.body),
	win = $(window),
	maxAnimation = 400,
	$preloader = $("#Preloader");
	
var ua = navigator.userAgent,
	isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua),
	isIE = /MSIE/.test(ua);
	
if (isMobileWebkit) { $('html').addClass('mobile'); }
else { $('html').addClass('no-mobile'); }

var responsiveCheck = function() {
	// Retreive current media query trigger ( See /_less/_design/_responsive.less )
	return window.getComputedStyle(document.body,':after').getPropertyValue('content');
};

void (function() {

	$('.Rotating-Banners .lean-slider').leanSlider({
		pauseTime: 15000, // the delay between each slide, false to turn off slideshow
		pauseOnHover: false, // pause the slideshow on hover
		startSlide: 0, // zero based index of starting slide
		controlNav: '.Rotating-Banner-Pagination', // selector string for controlNav element 
		controlNavBuilder: function(index, slide){
			return '<button class="lean-slider-control-nav No-Button"></button>';
		}
	});
	
})();

//@codekit-append "_scrolling.js";
//@codekit-append "_toggles.js";
//@ codekit-append "_placeholder.js";