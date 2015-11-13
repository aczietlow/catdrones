app.controller("IndexCtrl", function($scope) {
	
})

.controller("BlogCtrl", function($scope, $http) {
	$http.get("https://api.myjson.com/bins/37qfi")
		.success(function(response) {
			$scope.blogs = response;
		});
})

.controller("ProfileCtrl", function($scope, $http) {
	$http.get("https://api.myjson.com/bins/3ocnm")
		.success(function(response) {
			$scope.profiles = [];
			angular.forEach(response, function(value, key) {
				if(value['Team #'] === 1) {
					$scope.profiles.push(response[key]);
				}
			});
		});
})

.controller("TestimonialCtrl", function($scope, $http) {
	$http.get("https://api.myjson.com/bins/1ufqm")
		.success(function(response) {
			$scope.testimonials = response;
		});
})

.controller("PodcastCtrl", function($scope, $http) {
	$http.get("https://api.myjson.com/bins/56gq6")
		.success(function(response) {
			$scope.podcasts = response;
		});
})

.controller("ProductCtrl", function($scope, $http) {
	$http.get("https://api.myjson.com/bins/2x0mm")
		.success(function(response) {

			$scope.productsFirst = [];
			$scope.productsLast = [];
			
			angular.forEach(response, function(value, key) {
				if(key < 5) {
					console.log(response[0]);
					$scope.productsFirst.push(response[key]);
  				//console.log(key + ' : ' + value.Title);
  			}
  			if(key >= 5 && key <= 10) {
  				$scope.productsLast.push(response[key]);
  				//console.log(key + ' : ' + value.Title);
  			}
  		});
		});
});