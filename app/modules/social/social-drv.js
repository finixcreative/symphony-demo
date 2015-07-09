angular.module('coreMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/app/modules/social/social.html',
		};
	});