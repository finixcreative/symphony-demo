angular.module('coreMod')
	.directive('promotion', function(){
		return {
			restrict: 'E',
			templateUrl: '/symphony-demo/app/modules/promotion/promotion.html'
		};
	});