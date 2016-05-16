var app = angular.module('myApp', []);
app.controller('MainController', ['$scope', function($scope){
	
	$scope.headerLinks = [
		{
			name : 'Link',
			href : '#'
		},
		{
			name : 'Link',
			href : '#'
		},
		{
			name : 'Link',
			href : '#'
		},
	];

	$scope.sidebarLinks = [
		{
			name : 'The Grid',
			href : '#grid'
		},
		{
			name : 'Buttons',
			href : '#buttons'
		},
		{
			name : 'Typography',
			href : '#typography'
		},
		{
			name : 'Carousel',
			href : '#carousel'
		},
		{
			name : 'Link',
			href : '#'
		},
		{
			name : 'Link',
			href : '#'
		},
		{
			name : 'Link',
			href : '#'
		}
	];

	$scope.footerLinks = [
		{
			name : 'Link',
			href : '#'
		},
		{
			name : 'Link',
			href : '#'
		},
		{
			name : 'Link',
			href : '#'
		}
	];

}]);
app.directive('article', function(){
	return {
		restrict : 'E',
		templateUrl : 'js/app/partials/article.html'
	};

});
app.directive('menu', function(){
	return {
		link : function($scope, elem, attrs){
			elem.on('click', function(){
				var active = elem.hasClass('is-active');
				if(active){
					elem.removeClass('is-active');
					elem.next().removeClass('is-active');
				} else {
					elem.addClass('is-active');
					elem.next().addClass('is-active');
				}
			});
		}
	};

});
app.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);
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
app.factory('serviceHere', ['$http', function($http){
	return 
	$http.get('aURLofYourChoosing')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);