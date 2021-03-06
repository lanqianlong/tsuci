(function() {
	// Avoid `console` errors in browsers that lack a console.
  var method;
  var noop = function () {};
  var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
          console[method] = noop;
      }
  }
}());


////////////////////////////////////////
// Includes
////////////////////////////////////////
//@codekit-append "vendor/jquery.ba-throttle-debounce.js"
//@codekit-append "vendor/lean-slider.js"
//@codekit-append "vendor/blur.js"
