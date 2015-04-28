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

          d3Service.d3().then(function(d3) { 
            function zoomed() {
              svg.select(".x.axis").call(xAxis);
              svg.select(".y.axis").call(yAxis);
            }
            
            function reset() {
              d3.transition().duration(750).tween("zoom", function() {
                var ix = d3.interpolate(x.domain(), [-width / 2, width / 2]),
                    iy = d3.interpolate(y.domain(), [-height / 2, height / 2]);
                return function(t) {
                  zoom.x(x.domain(ix(t))).y(y.domain(iy(t)));
                  zoomed();
                };
              });
            }

            var getHeight = function() {
              return d3.select(el[0]).node().getBoundingClientRect().height;
            }
            var getWidth = function() {
              return d3.select(el[0]).node().getBoundingClientRect().width;
            }

            console.log("height is " + getHeight());
            console.log("width is " + getWidth());
            console.log("height is " + getHeight());

            var x = d3.scale.linear()
                .domain([-getWidth() / 2, getWidth() / 2])
                .range([0, getWidth()]);
            
            var y = d3.scale.linear()
                .domain([-getHeight() / 2, getHeight() / 2])
                .range([getHeight(), 0]);

            var margin = { top: 0, right: 0, bottom: 0, left: 0 };
            var width = getWidth() - margin.left - margin.right;
            var height = getHeight() - margin.top - margin.bottom;

            var x = d3.scale.linear().domain([0, 100]).range([0, getWidth()]);
            var y = d3.scale.linear().domain([0, 100]).range([0, getHeight()]);

            var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickSize(-height);
            var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5).tickSize(-width);

            var zoom = d3.behavior.zoom()
                .x(x).y(y)
                .scaleExtent([1, 10])
                .on("zoom", zoomed);

            console.log("getWidth is " + getWidth() + ", width is " + width);
            console.log("getHeight is " + getHeight() + ", height is " + height);
            var svg = d3.select(el[0]).append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(0,0)").call(zoom);

            svg.append("rect")
              .attr("width", width)
              .attr("height", height)
              .attr("class", "canvas_bg");
            svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);
            svg.append("g")
              .attr("class", "y axis")
              .call(yAxis);
  
            var mouseDownListener = function(d) {
              console.log('down');
              //console.log(d);
            };
          
            var mouseUpListener = function(d) {
              console.log('up');
              console.log(scope.handler);
              //console.log(d);
              var circles = svg.selectAll("circle").data([1, 2, 4, 8, 16, 32, 64]).enter().append("circle");
              circles
                .attr("cx", function(d, i) { console.log("i is " + i + ", d is " + d); return (i*50)+25; })
                .attr("cy", 30)
                .attr("r", function(d) { return d });
            };

            svg
              .on('mousedown', mouseDownListener)
              .on('mouseup', mouseUpListener);

            d3.select("button").on("click", reset);
          });
        },
      };
    }]);
  }, 'directives.infra-schematic');

  return config.getAppModule();
});
