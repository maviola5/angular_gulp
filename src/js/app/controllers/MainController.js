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