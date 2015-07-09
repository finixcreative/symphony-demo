angular.module('coreMod')
	.directive('fxfooter', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'SitemapController',
			controllerAs: 'sitemap',
			templateUrl: '/symphony-demo/app/modules/footer/footer.html'
		};
	});