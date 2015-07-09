angular.module('coreMod')
	.directive('promotion', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/symphony-demo/app/modules/promotion/promotion.html'
		};
	});