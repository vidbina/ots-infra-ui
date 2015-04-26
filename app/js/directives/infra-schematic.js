define(['app/config', 'angular', 'app/lib/infrastructure_controller'], function(config, ng, infraCtrl) {
  'use strict';

  var appName = config.getAppName();

  var InfraCtrl = new infraCtrl.controller('test');

  var mouseDownListener = function() {
    console.log('down');
  };

  var mouseUpListener = function() {
    console.log('up');
  };

  config.addToSetup(function(appModule) {
    appModule.directive('infraSchematic', ['d3Service', function(d3Service) {
      return {
        restrict: 'E',
        //require: '^ngModel',
        scope: {
          handler: '=ctrl'
        },
        link: function(scope, el, attr) {
          //console.log("LINK");
          console.log(scope.handler);
          d3Service.d3().then(function(d3) { 
            var svg = d3.select(el[0]).append('svg');
            svg
              .on('mousedown', mouseDownListener)
              .on('mouseup', mouseUpListener);
          });
        },
      };
    }]);
  }, 'directives.infra-schematic');

  return config.getAppModule();
});
