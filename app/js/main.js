define(['app/config', 'angular', 'd3', 'ngMaterial', 'controllers/demo', 'directives/infra-schematic'], function(config, ng, dthree, ngMaterial) {
  'use strict';

  var appName = config.getAppName();

  config.setAppModule(ng.module(appName, ['ngMaterial', 'd3']));
  
  ng.element(document).ready(function() {
    console.log('load directives');
    config.loadControllers();
    config.setup();
    ng.bootstrap(document, [appName]);
    console.log('booted ' + appName);
  });

  return config.getAppModule();
});
