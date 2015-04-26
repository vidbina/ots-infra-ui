define(function() {
  'use strict';
  var appName = 'OTSDesignTool';
  var appModule = undefined;
  var bootList = [];
  var controllerList = [];

  return {
    getAppName: function() { return appName; },
    setAppModule: function(module) { appModule = module; },
    getAppModule: function() { return appModule; },
    addToSetup: function(item, name) { bootList.push({ f: item, name: name }); },
    setup: function() {
      if(appModule != undefined) {
        bootList.forEach(function(obj, i, arr) {
          console.log('setting up ' + obj.name);
          obj.f(appModule);
        });
      } else {
        console.warn("Set application first");
      }
    },
    loadControllers: function() {
      if(controllerList.length == 0) console.warn("no controllers");
      console.log(controllerList);
      controllerList.forEach(function(obj, i, arr) {
        console.log('loading controller ' + obj.name);
        obj.f(appModule);
      });
    },
    registerController: function(ctrl, name) {
      controllerList.push({ f: ctrl, name: name });
    }
  };
});
