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