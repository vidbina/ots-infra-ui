'use strict';
define(['app/config', 'angular', 'd3', 'ngMaterial'], function(config, ng, dthree, ngMaterial) {
  var appName = config.getAppName();

  ng.module(appName, ['ngMaterial', 'd3']);
  ng.element(document).ready(function() {
    ng.bootstrap(document, [appName]);
    console.log('booted ' + appName);
  });
  
  ng.module(appName).directive('infraSchematic', ['d3Service', function(d3Service) { 
    console.log("schematic here");
    return {
      restrict: 'E',
      //require: '^ngModel',
      scope: true,
      link: function($scope, el, attr) {
        console.log("link");
        d3Service.dthree().then(function(dthree) { 
          console.log("promised resolved");
          console.log(dthree);
          var svg = dthree.select(el[0]).append('svg');
        });
        console.log(el);
      }
    }
  }]);
  
  ng.module(appName).controller("DemoCtrl", ['$scope', function($scope) {
    console.log("keep them flowing");
  }] );
});
