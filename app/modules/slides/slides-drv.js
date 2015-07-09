angular.module('coreMod')
	.directive('slides', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				images: '='
			},
			templateUrl: '/symphony-demo/app/modules/slides/slides.html',
			controller: 'ContentController',
			controllerAs: 'content',
			link: function (scope, elem, attrs){
				scope.currentIndex = 0;
				scope.next = function(){
					scope.currentIndex < scope.content.contents.slides.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				};
				scope.prev = function(){
					scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.content.contents.slides.length - 1;
				};
				scope.$watch('currentIndex', function() {
					scope.content.contents.slides.forEach(function(slide) {
						slide.visible = false;
					});
					scope.content.contents.slides[scope.currentIndex].visible = true;
				});
				var timer;
				var sliderFunc = function() {
					timer = $timeout(function() {
						scope.next();
						timer = $timeout(sliderFunc, 15000);
					}, 15000);
				};
				sliderFunc();
				scope.$on('$destroy', function() {
					$timeout.cancel(timer);
				});
			},
		};
	});