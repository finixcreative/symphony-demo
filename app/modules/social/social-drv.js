angular.module('coreMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'SocialController',
			controllerAs: 'social',
			templateUrl: '/symphony-demo/app/modules/social/social.html',
		};
	});