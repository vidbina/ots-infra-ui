define(['app/config', 'angular', 'app/lib/infrastructure_controller'], function(config, ng, infraCtrl) {
  'use strict';

  var appName = config.getAppName();

  config.addToSetup(function(appModule) {
    appModule.directive('infraSchematic', ['d3Service', function(d3Service) {
      return {
        restrict: 'E',
        //require: '^ngModel',
        scope: {
          handler: '=',
        },
        link: function(scope, el, attr) {
          console.log("LINK");
          var InfraCtrl = new infraCtrl.controller('test');
          console.log(InfraCtrl.getData());
          //scope.handler = InfraCtrl;
          console.log(scope.handler.getData());

          var svg = undefined;
          d3Service.d3().then(function(d3) { 
            var svg = d3.select(el[0]).append('svg');
  
            var mouseDownListener = function(d) {
              console.log('down');
              //console.log(d);
            };
          
            var mouseUpListener = function(d) {
              console.log('up');
              console.log(scope.handler);
              //console.log(d);
              var circles = svg.selectAll("circle").data([5, 50]).enter().append("circle");
              circles
                .attr("cx", function(d, i) { return (i*50)+25; })
                .attr("cy", 30)
                .attr("r", function(d) { return d });
            };

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
