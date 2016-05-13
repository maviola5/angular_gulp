app.directive("headerNavigation", function(){
	return {
		templateUrl: 'js/app/partials/header_navigation.html',
		link : function(scope, elem, attrs){
			elem.bind('click', function(){

				var thisEl = angular.element(document.getElementsByClassName('brand'));
				var active = thisEl.hasClass('active');

				if(active){
					//remove class active from brand / nav
					thisEl.removeClass('active');
					thisEl.next().removeClass('active');
				} else {
					//add class active to brand / nav
					thisEl.addClass('active');
					thisEl.next().addClass('active');
				}
			});
		}
	}
});

