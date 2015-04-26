define(['app/config', 'angular', 'app/lib/infrastructure_controller'], function(config, ng, infraCtrl) {
  'use strict';

  var appName = config.getAppName();
  console.log("controllers");

  config.registerController(function(appModule) {
    appModule.controller("DemoCtrl", ['$scope', function($scope) {
      $scope.testing = new infraCtrl.controller('from demo.js');
      console.log("demo.js");

      $scope.select = function(item) {
        console.log('selected ' + item);
        //console.log($scope.testing.getData());
      };
    }]);
  }, 'controllers.demo');
});
