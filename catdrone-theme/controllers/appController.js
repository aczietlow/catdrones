app.controller("IndexCtrl", function($scope) {
	
})

.controller("BlogCtrl", function($scope, $http) {
	$http.get("https://api.myjson.com/bins/37qfi")
		.success(function(response) {
			$scope.blogs = response;
		});
});