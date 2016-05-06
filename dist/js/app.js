/** 	
*	jQuery Carousel Plugin (w/ jQuery Slide Motion plugin)
*	Author: Tony Viola	
*	Description: Marketing and Slide Show Carousel
**/

//jQuery Slide Motion plugin for jQuery Carousel plugin
(function($){
$.fn.slideMotion = function(direction, isActive) {
    var settings = {
    	positionQueue : direction.toLowerCase() === 'right' ? 'prev' : 'next',
    	positionChange : direction.toLowerCase() === 'right' ? '100%' : '-100%',
    	elementStatus : typeof isActive === 'boolean' && isActive === true ? true : false
    }
    this
    .addClass(settings.elementStatus ? '':'is-'+settings.positionQueue)
	.velocity({
		"left" : settings.elementStatus === true ? settings.positionChange : 0
	}, {
		complete: function(){
			if(settings.elementStatus){
				$(this)
				.removeClass("is-active")
				.removeAttr("style");

			} else {
				$(this)
				.addClass("is-active")
				.removeClass('is-'+settings.positionQueue)
				.removeAttr("style");
			}
		}
		// duration : 500ms
	});
    return this;
}
})(jQuery);

//jQuery Carousel plugin
(function($){
	$.fn.carousel = function(){
		
		var $this = $(this);
		var $carousel = $(this);

		//decalare the children
		var children = $this.children('.carousel__slide');
		
		//loop through the children: add attr create control nodes
		for(var i = 0; i < children.length; i++){
			$(children[i])
			.attr('id', 'slide-'+i)
			.attr('data-slide', i);
			$(".carousel__slide_nodes")
			.append('<span class="carousel__controller carousel__slide_node" data-node="'+i+'" data-toggle="node"></span>');
		}
		//to start
		var currentSlide = 0;
		var lastSlideNum = children.length - 1;

		//Make the current slide active.
		$('#slide-'+currentSlide)
		.addClass("is-active");

		//Makes the node corresponding to the current slide active.
		$('.carousel__slide_node[data-node="'+currentSlide+'"]')
		.addClass("is-active");

		/*	move slide in proper direction
		*	@param controlType is string. value is either next, left or null
		*	@value === 'next' : brings slide from right
		*	@value === 'prev' : left brings slide from left
		*	@value === null : lets the natural behaviour of the carousel controller handle motion
		*/	
		function moveSlide(controlType){
			var c = controlType;
			console.log(c);
			var controlTypeValid = (controlType !== null && controlType === 'next' || controlType === 'prev') ? true : false;
			var $this = $(this);
			var carouselControlType = (controlTypeValid === false) ? $this.attr("data-toggle") :
				(controlType === 'next') ? 'next' : 'prev';  
 
						
			if(carouselControlType === 'node'){
				var goHere = $(this).attr("data-node");
				if(Number(goHere) === Number(currentSlide)){
				} else {
						
					if(Number(goHere) < Number(currentSlide)){
										
						$("#slide-"+goHere).slideMotion('right');
						$("#slide-"+currentSlide).slideMotion('right', true)
						
						currentSlide = goHere;
					}

					if(Number(goHere) > Number(currentSlide)){

						$("#slide-"+goHere).slideMotion('left');
						$("#slide-"+currentSlide).slideMotion('left', true);
						
						currentSlide = goHere;
					}
				}
			}

			if(carouselControlType === 'next'){
				var slideTo = currentSlide;
				slideTo++;

				if(Number(slideTo) > Number(lastSlideNum)){
					slideTo = 0;
						
					$("#slide-"+slideTo).slideMotion('left');
					$("#slide-"+currentSlide).slideMotion('left', true);
					
					currentSlide = 0;

				} else {

					$("#slide-"+slideTo).slideMotion('left');
					$("#slide-"+currentSlide).slideMotion('left', true);

					currentSlide++;
				}
			}

			if(carouselControlType === 'prev'){
				var slideTo = currentSlide;
				slideTo--;

				if(Number(slideTo) < 0){
					
					slideTo = lastSlideNum;
					
					$("#slide-"+slideTo).slideMotion('right');
					$("#slide-"+currentSlide).slideMotion('right', true);
		
					currentSlide = lastSlideNum;

				} else {

					$("#slide-"+slideTo).slideMotion('right');
					$("#slide-"+currentSlide).slideMotion('right', true);
					
					currentSlide--;	
				}
			}

			$(".carousel__slide_node.is-active").removeClass("is-active");
			$('.carousel__slide_node[data-node="'+currentSlide+'"]').addClass("is-active");
				
			// timing
			$(".carousel__controller").off("click", moveSlide);
			window.setTimeout(function(){
				$(".carousel__controller").on("click", moveSlide);
			}, 500);

			// console.log($carousel);
			$carousel.off('swipeleft swiperight');
			window.setTimeout(function(){
				//mobile event listener
				$carousel.hammer().on("swipeleft", 
					function(){
						moveSlide('next');
					}
				);
				// //mobile event listener
				$carousel.on("swiperight", 
					function(){
						moveSlide('prev');
					}
				);
			}, 500);

		}	

		//desktop event listener
		$(".carousel__controller").on("click", moveSlide);
		//mobile event listener
		$this.hammer().on("swipeleft", 
			function(){
				moveSlide('next');
			}
		);
		//mobile event listener
		$this.hammer().on("swiperight", 
			function(){
				moveSlide('prev');
			}
		);
		// allow chaining
		return this;
	}
})(jQuery);


/** 	
*	Market Ticker
*	Author: Tony Viola	
*	Description: Market Ticker
**/

window.setInterval(ticker,2500);

function ticker(){
	var active = $(".ticker__li.is-active");
	if(active.index(".ticker__li") === $(".ticker__li").length - 1){
		$(".ticker__li:first-child")
		.addClass("is-active");
		active
		.removeClass('is-active');
	} else {
		active
		.next()
		.addClass("is-active");
		active
		.removeClass('is-active');
	}
}
/**
*	jQuery Nav Handle Plugin
*	Author: Tony Viola	
*	Description: Mobile handle for navigation menu
*
*
**/

$(".nav_handle").on("click", mobileNavToggle);
// $(".dimmer").on("click", mobileNavToggle);


function mobileNavToggle(){
	var active = $(this).hasClass('is-active');
	if(active){
		$(this)
		.removeClass('is-active')
		.children()
		.removeClass('is-active');
		$("body").removeClass('is-active');
		// $("#main").removeClass('is-active');
		// $("#footer").removeClass('is-active');
		// $("#header").removeClass('is-active');
		$(".dimmer").removeClass('is-active');
		$(".inner-wrap").removeClass('is-active');
		$(".nav_mobile").removeClass('is-active');
	} else {
		$(this)
		.addClass("is-active")
		.children()
		.addClass('is-active');
		// $("#main").addClass('is-active');
		// $("#footer").addClass('is-active');
		// $("#header").addClass('is-active');
		$(".dimmer").addClass('is-active');
		$(".inner-wrap").addClass("is-active");
		$("body").addClass("is-active");
		$(".nav_mobile").addClass('is-active');
	}
}
/**
*	Page functions
*
**/

$(".carousel").carousel();