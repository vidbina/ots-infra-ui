define(['angular', 'd3'], function(ng, d3) {
  console.log("loading d3");
  ng.module('d3', [])
  .factory(
    'd3Service', 
    ['$document', '$q', '$rootScope', function($document, $q, $rootScope) {
      console.log('d3 factory prepping promise');
      var d = $q.defer();
      setTimeout(function() { console.log("resolved d3"); d.resolve(d3) }, 1000); // load d3 for real
      return { 
        dthree: function() { return d.promise; }
      };
    }]
  );
});
