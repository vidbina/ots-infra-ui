define(['app/config', 'angular', 'd3', 'ngMaterial', 'app/lib/infrastructure_controller', 'directives/infra-schematic'], function(config, ng, dthree, ngMaterial, infraCtrl) {
  'use strict';
  var appName = config.getAppName();

  config.setAppModule(ng.module(appName, ['ngMaterial', 'd3']));
  
  ng.element(document).ready(function() {
    console.log('load directives');
    config.setup();
    ng.bootstrap(document, [appName]);
    console.log('booted ' + appName);
  });
  
  ng.module(appName).controller("DemoCtrl", ['$scope', function($scope) {
    console.log("keep them flowing");

    $scope.testing = new infraCtrl.controller('from main.js');
    $scope.infrastructure = {
      currentDrawable: 'node',
    };

    $scope.select = function(item) {
      console.log('selected ' + item);
      console.log($scope.testing.getData());
    };
  }]);

  return config.getAppModule();
});
