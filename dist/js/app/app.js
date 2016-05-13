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
app.directive('footer', function(){
  return {
    restrict : 'E',
    templateUrl : 'js/app/partials/footer.html',
    link : function(scope, elem, attrs){
      //do stuff
    }
  }
});
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


app.directive('helloWorld', function() {
  return {
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
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
		templateUrl : 'js/app/partials/sidebar_navigation.html'
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