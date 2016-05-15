app.directive('sidebarNavigation', function(){
	return {
		replace : true,
		templateUrl : 'js/app/partials/sidebar_navigation.html',
		link : function(scope, elem, attrs){

			var sideNavPostion = document
				.getElementsByClassName('sidebar')[0]
				.getBoundingClientRect().top;

			angular.element(window).on("scroll", function(){

				var scrollPosition = window.scrollY;
				if(scrollPosition > sideNavPostion ){
					angular
					.element(document.getElementsByClassName('sidebar_nav'))
					.css({
						"position" : "fixed",
						"top" : 0
					});
				} else {
					angular
					.element(document.getElementsByClassName('sidebar_nav'))
					.css({"position" : "relative"});
				}
			});
		}
	};

});