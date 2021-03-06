void (function(){

	////////////////////////////////////////
	// Tab-like toggle on data attribute
	root.on("click","[data-togglethis]",function(e){
		$(this).toggleClass("is-Open");
		e.preventDefault();
	});
	
	
	////////////////////////////////////////
	// Tab-like toggle on data attribute	
	$(".People-List").each(function(){
		var	$this = $(this),
			tabSelector = $this.data("tabs"),
			$people = $this.find('.Person'),
			$peopleToggles = $this.find('.Person-Overview'),
			$personDetails = $("<div class='Person-Details'></div>").hide().appendTo($this);
			
//		console.log("this",$this,"tabs",$tabs,"tabtoggles",$tabToggles);
		
		$peopleToggles.on("click",function(e){
			var $toggle = $(this),
				$person = ( $toggle.closest($people) || $toggle.siblings('.Person') ).first(),
				alreadyOpen = $person.hasClass("is-Open");
	
			$peopleToggles.removeClass("is-Clicked");
			$people.removeClass("is-Open");
			
			if ( $person.length && ! alreadyOpen ) {
					
				var $personDescription = $person.find('.Person-Description'),
					$personName =  $person.find('.Person-Name'),
					$nextRow = $people.filter(function(index){
						if ( $(this).offset().top > $person.offset().top )
							return true;
					}).first();
				
//				console.log("next row",$nextRow);
					
				$toggle.addClass("is-Clicked");
				$person.addClass("is-Open");
				
				$personDetails.animate({ "opacity" : 0 },maxAnimation / 2, function(){
					
					$personDetails.removeClass("is-Open").empty()
						.append($personName.clone())
						.append($personDescription.html());
					
					if ( ! $nextRow.length || $person.is($people.last()) )
						$personDetails.insertAfter($people.last());
					else
						$personDetails.insertBefore($nextRow);
						
					$personDetails.slideDown(maxAnimation/2,function(){
						$personDetails.addClass("is-Open");
					}).animate({ "opacity" : 1 },maxAnimation / 2);
					
				});
				
			} else {
				$personDetails.slideUp(maxAnimation, function(){
					$personDetails.hide().removeClass("is-Open");
				});
			}
			
			e.preventDefault();

		});
	
	});
		
	/*
	////////////////////////////////////////
	// Tab-like toggle on data attribute
	
	$("[data-tabs]").each(function(){
		var	$this = $(this),
			tabSelector = $this.data("tabs"),
			$tabs = $(tabSelector),
			toggleSelector = $this.data("tabtoggles"),
			$tabToggles = $(toggleSelector);
			
//		console.log("this",$this,"tabs",$tabs,"tabtoggles",$tabToggles);
		
		root.on("click",toggleSelector,function(e){
			var $toggle = $(this),
				$tab = ( $toggle.closest($tabs) || $toggle.siblings(tabSelector) );
			
//			console.log("tabselector",tabSelector);
//			console.log("closest tab",$tab);
			
			if ( $tab.length ) {
				$tabToggles.removeClass("is-Clicked");
				$tabs.removeClass("is-Open");
				if ( ! $tab.hasClass("is-Open") ) {
					
					$toggle.addClass("is-Clicked");
					$tab.addClass("is-Open");
				}
			}
			
			e.preventDefault();
		});
	});
	*/
	
	////////////////////////////////////////
	// Toggle based on data attribute
	root.on("click","[data-toggle]",function(e){
		var toggles = $(this).data("toggle");
		var target = $(toggles);
		var button = $("[data-toggle*='"+toggles+"']").toggleClass("is-Clicked");
		
		target.each(function(i){
			var curTarget = $(this);
			curTarget[ curTarget.hasClass("is-Open") ? "fadeOut" : "fadeIn" ](maxAnimation,
				function(){
					curTarget.css("display","").toggleClass("is-Open");
					curTarget.find("input").first().focus();
			});
		});
		
		e.preventDefault();
	});
	
	
	////////////////////////////////////////
	// Toggle content on data attribute
	root.on("click","[data-togglecontent]",function(e){
		var $this = $(this).toggleClass("is-Toggled"),
			$content = $this.wrapInner("<div class='Toggle-Content'></div>"),
			newContent = $this.data("togglecontent"),
			curContent = $content.html();
		
		$this.data("togglecontent",curContent);
			
		$content.animate({ "opacity" : 0 },maxAnimation,function(){
			$content.html(newContent).animate({ "opacity" : 1 },maxAnimation,function(){ $this.html(newContent); });
		});
	
	});

	
	////////////////////////////////////////
	// Toggle video based on data attribute
	root.on("click","[data-videotoggle]",function(e){
		var $this = $(this).toggleClass("is-Clicked"),
			video = $this.attr("href"),
			$target = $($this.data("videotoggle")).first(),
			$parent = $target.parent();
			
		scrollToElement($parent);
		
		if ( ! $target.hasClass("is-Open") ) {
			var videoID,
				videoURL,
				$embed = "";
			
			if ( video.match(/vimeo.com/) ) {
				videoID = video.match(/vimeo\.com\/([0-9]+)/i)[1];
				videoURL = '//player.vimeo.com/video/'+videoID+'?title=0&amp;byline=0&amp;portrait=0&amp;color=969696&amp;autoplay=1';
			} else if ( video.match(/youtu(be\.com|\.be)/gi) ) {
				videoID = video.match(/youtu(be\.com\/(watch\?v=|embed\/|v\/)|\.be\/)([^\&\?\/]+)/i)[3];
				videoURL = '//youtube.com/embed/'+videoID+'?autohide=1&autoplay=1&rel=0&showinfo=0&modestbranding=1&controls=0';
			} else {
				return false;
			}
			
			$embed = $('<div class="Responsive-Embed Video"><div class="Loader Absolute-Center"></div><iframe width="640" height="360" src="'+videoURL+'" frameborder="0" allowfullscreen></iframe></div>')
				.appendTo($preloader);
			
			$parent.css({ "min-height" : "100px", "max-height" : "2000px" });
			$target.append($embed).fadeIn(maxAnimation);
			$target.toggleClass("is-Open");
			
		} else {
			$parent.addClass("no-Transition").css({ "min-height" : $parent.outerHeight() });
			setTimeout(function(){
				$parent.removeClass("no-Transition").css({ "min-height" : "", "max-height" : "" });
				$target.fadeOut(maxAnimation,function(){
					$target.empty();
					$target.toggleClass("is-Open");
				});
			},1);
		}
		
		
//		height = ( $embed.length ? "inherit" : "" );
//		console.log("height",height);
//		$parent.css({ "min-height" : height });

//		$parent.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
//			function(){
//		});
		
		
	
		e.preventDefault();
		
	});

})();