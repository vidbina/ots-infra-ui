define(['app/config', 'angular', 'app/lib/infrastructure_controller'], function(config, ng, infraCtrl) {
  'use strict';

  var appName = config.getAppName();

  var InfraCtrl = new infraCtrl.controller('test');
  console.log("infrastructure data is " + InfraCtrl.getData());
  console.log(InfraCtrl.getElements());

  console.log('loading infra-schematic directive for ' + appName);

  var mouseDownListener = function() {
    console.log('down');
  };

  var mouseUpListener = function() {
    console.log('up');
  };

  config.addToSetup(function(appModule) {
    appModule.directive('infraSchematic', ['d3Service', function(d3Service) {
      console.log('infra-schematic here');
      return {
        restrict: 'E',
        //require: '^ngModel',
        scope: true,
        link: function(scope, el, attr) {
          console.log("link");
          console.log(scope);
          console.log('was $scope');
          d3Service.d3().then(function(d3) { 
            console.log("promised resolved");
            var svg = d3.select(el[0]).append('svg');
            svg
              .on('mousedown', mouseDownListener)
              .on('mouseup', mouseUpListener);
          });
          console.log(el);
        },
      };
    }]);
  }, 'directives.infra-schematic');

  return config.getAppModule();
});
