angular.module('coreMod')
	.directive('fxfooter', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'SitemapController',
			controllerAs: 'sitemap',
			templateUrl: '/web/app/modules/footer/footer.html'
		};
	});