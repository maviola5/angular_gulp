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