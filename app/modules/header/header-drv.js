angular.module('coreMod')
	.directive('fxheader', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/app/modules/header/header.html'
		};
	});