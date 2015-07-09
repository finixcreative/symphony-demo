angular.module('coreMod')
	.directive('fxfooter', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/web/app/modules/footer/footer.html'
		};
	});