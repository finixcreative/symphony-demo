angular.module('coreMod')
	.directive('fxnav', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'SitemapController',
			controllerAs: 'sitemap',
			templateUrl: '/symphony-demo/app/modules/nav/nav.html',
		};
	});