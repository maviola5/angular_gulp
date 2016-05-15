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