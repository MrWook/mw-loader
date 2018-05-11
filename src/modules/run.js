angular.module('mw-loader').run(['$rootScope', '$document', '$compile', '$timeout', 'mwLoaderConfig', function($rootScope, $document, $compile, $timeout, mwLoaderConfig){
	let parent_selector = mwLoaderConfig.parent_selector;
	//set the directive inside the parent selector, default is body
	//I'm totally aware of the fact that you shouldn't use DOM manipulation outside of a directive but this is for a greater GOOD!
	let parent = angular.element($document[0].querySelector(parent_selector));
	$timeout(function(){
		//create new scope object for the compile directive
		let $scope = $rootScope.$new();
		parent.prepend($compile('<mw-loader></mw-loader>')($scope));
	}, 0);
}]);