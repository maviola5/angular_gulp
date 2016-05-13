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