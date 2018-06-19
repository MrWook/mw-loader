/**
* @version v1.0.0
* @link https://github.com/MrWook/mw-loader
* @license MIT
* Copyright (c) 2018} MrWook
*/(function(angular, undefined){
 'use strict';
angular.module('mw-loader', ['mw-loader-template']);
angular.module('mw-loader').constant('mwLoaderConfig', {
	parent_selector: 'body',
	on_startup: true,
	templateUrl: 'mw-loader.html'
});

angular.module('mw-loader').directive('mwLoader', ['mwLoaderConfig', function (mwLoaderConfig) {
	return {
		controller: ['$scope', '$timeout', 'mwLoaderConfig', function AlertCtrl($scope, $timeout, mwLoaderConfig) {
			$scope.loader = mwLoaderConfig.on_startup;

			//listen loader on event and show the loader
			$scope.$on('mw-loader-on', function (event, message) {
				$scope.loader = true;
				if (message !== undefined && message.timeout !== undefined) {
					$timeout(function () {
						$scope.loader = false;
					}, message.timeout);
				}
			});

			//listen loader off event and hide the loader
			$scope.$on('mw-loader-off', function (event, message) {
				$scope.loader = false;
			});
		}],
		restrict: 'E',
		templateUrl: function templateUrl(params, attr) {
			if (attr.mwLoaderTemplateUrl !== undefined) {
				return attr.mwLoaderTemplateUrl;
			} else {
				return mwLoaderConfig.templateUrl;
			}
		},
		replace: true
	};
}]);

angular.module('mw-loader').run(['$rootScope', '$document', '$compile', '$timeout', 'mwLoaderConfig', function ($rootScope, $document, $compile, $timeout, mwLoaderConfig) {
	var parent_selector = mwLoaderConfig.parent_selector;
	//set the directive inside the parent selector, default is body
	//I'm totally aware of the fact that you shouldn't use DOM manipulation outside of a directive but this is for a greater GOOD!
	var parent = angular.element($document[0].querySelector(parent_selector));
	$timeout(function () {
		//create new scope object for the compile directive
		var $scope = $rootScope.$new();
		parent.prepend($compile('<mw-loader></mw-loader>')($scope));
	}, 0);
}]);

angular.module("mw-loader-template", []).run(["$templateCache", function($templateCache) {
	$templateCache.put("mw-loader.html",
		"<div class=\"mw-loader\" ng-if=\"loader\"><div class=\"loader_1\"></div><div class=\"loader_text\">LOADING...</div><div class=\"loader_2\"></div><div class=\"loader_3\"></div></div>");
}]);

})(angular);
//# sourceMappingURL=mw-loader.js.map