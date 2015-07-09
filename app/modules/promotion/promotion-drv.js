angular.module('coreMod')
	.directive('promotion', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/promotion/promotion.html'
		};
	});