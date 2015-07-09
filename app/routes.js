angular.module('symphonyApp')
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/pages/home/home.html',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);