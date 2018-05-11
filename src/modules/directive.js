angular.module('mw-loader').directive('mwLoader', ['mwLoaderConfig', function(mwLoaderConfig){
	return {
		controller:  ['$scope', '$timeout', 'mwLoaderConfig', function AlertCtrl($scope, $timeout, mwLoaderConfig){
			$scope.loader = mwLoaderConfig.on_startup;

			//listen loader on event and show the loader
			$scope.$on('mw-loader-on', function(event, message){
				$scope.loader = true;
				if(message !== undefined && message.timeout !== undefined){
					$timeout(function(){
						$scope.loader = false;
					}, message.timeout);
				}
			});

			//listen loader off event and hide the loader
			$scope.$on('mw-loader-off', function(event, message){
				$scope.loader = false;
			});
		}],
		restrict:    'E',
		templateUrl: function templateUrl(params, attr){
			if(attr.mwLoaderTemplateUrl !== undefined){
				return attr.mwLoaderTemplateUrl;
			}else{
				return mwLoaderConfig.templateUrl;
			}
		},
		replace:     true
	};
}]);