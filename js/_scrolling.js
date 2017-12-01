//void (function(){

	var scrollable = $("html, body"),
		scrollableHeight = $(document), // scrollable.height();
		scrollOffset = 20; // mainNavHeight;
	
	var scrollToElement = function(element) {
		var el;
		var endTop = 0;
		var currentTop = win.scrollTop();
		var id  = this.hash;
		
		console.log("currentTop",currentTop);
		
		if ( id === "#" || element === "#" ) {
			endTop = 0;
		} else if ( element === "bottom" ) {
			endTop = scrollableHeight.height();
		} else {
			if ( element.length ) {
				el = $(element);
				endTop = el.offset().top;
				console.log("Element exists! ",el.offset().top);
	//			id = el.attr("id");
			} else {
				el = $(id);
				if ( ! id ) { return; }
				if ( ! el.length ) return;
				
				console.log("Element didn't exist! ",el.offset().top);
				endTop = el.offset().top;
			}
			
	//		endTop = el.offset().top;
	//		endTop -= (mainNavHeight/1.7);
		}
		
		//endTop += currentTop; // Fix for non-window Scrolling Element
		root.addClass("is-Scrolling");
	//	console.log("endTop: ",endTop);
		scrollable.scrollTop(currentTop).animate({ scrollTop: endTop }, Math.abs( currentTop - endTop ) / 2, function(){
			root.removeClass("is-Scrolling");
		});
		
		return false;
	};
	
//})();