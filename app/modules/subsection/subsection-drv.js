angular.module('coreMod')
	.directive('subsection', function(){
		return {
			restrict: 'E',
			replace: true,
			controller: 'ContentController',
			controllerAs: 'content',
			templateUrl: '/symphony-demo/app/modules/subsection/subsection.html',
		};
	});