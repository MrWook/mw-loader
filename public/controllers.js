'use strict';
angular.module('app', ['mw-loader']);

angular.module('app').config(['mwLoaderConfig', function(mwLoaderConfig){
	mwLoaderConfig.parent_selector = 'body';
	mwLoaderConfig.on_startup      = false;
	mwLoaderConfig.templateUrl     = 'mw-loader.html';
}]);
angular.module('app').run(['$rootScope', '$timeout', function($rootScope, $timeout){
	$timeout(function(){
		$rootScope.$broadcast('mw-loader-on');
	}, 1000);
}]);