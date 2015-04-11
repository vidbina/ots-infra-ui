angular.module('d3', [])
  .factory('d3Service', ['$document', '$q', '$rootScope', function($document, $q, $rootScope) {
    console.log('d3 service factory prepping promise');
    var d = $q.defer();
    setTimeout(function() { console.log("resolved d3"); d.resolve(d3) }, 1000); // load d3 for real
    return { 
      dthree: function() { return d.promise; }
    };
  }
]);

angular.module('OTSDesignTool', [ 'ngMaterial', 'd3' ]);

angular.module('OTSDesignTool').directive('infraSchematic', ['d3Service', function(d3Service) { 
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

angular.module('OTSDesignTool').controller("DemoCtrl", ['$scope', function($scope) {
  console.log("keep them flowing");
}] );
