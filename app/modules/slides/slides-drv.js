angular.module('slidesMod')
	.directive('slides', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				images: '='
			},
			templateUrl: '/symphony-demo/app/widgets/slides/slides.html',
			controller: 'ContentController',
			controllerAs: 'content',
			link: function (scope, elem, attrs){
				scope.currentIndex = 0;
				scope.next = function(){
					scope.currentIndex < scope.slides.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				};
				scope.prev = function(){
					scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.slides.length - 1;
				};
				scope.$watch('currentIndex', function() {
					scope.slides.forEach(function(slide) {
						slide.visible = false;
					});
					scope.slides[scope.currentIndex].visible = true;
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