define(['app/config', 'angular'], function(config, ng) {
  'use strict';
  var appName = config.getAppName();

  console.log('loading infra-schematic directive for ' + appName);

  config.addToSetup(function(appModule) {
    appModule.directive('infraSchematic', ['d3Service', function(d3Service) {
      console.log('infra-schematic here');
      return {
        restrict: 'E',
        //require: '^ngModel',
        scope: true,
        link: function($scope, el, attr) {
          console.log("link");
          d3Service.d3().then(function(d3) { 
            console.log("promised resolved");
            var svg = d3.select(el[0]).append('svg');
          });
          console.log(el);
        },
      };
    }]);
  }, 'directives.infra-schematic');

  return config.getAppModule();
});
