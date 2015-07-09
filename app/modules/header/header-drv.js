angular.module('coreMod', [])
	.directive('fxheader', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/symphony-demo/app/modules/header/header.html'
		};
	});