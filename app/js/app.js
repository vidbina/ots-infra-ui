requirejs.config({
  baseUrl: '/bower_components',
  shim: {
    'angular': {
      exports: 'angular',
    },
    'ngAnimate': {
      deps: ['angular'],
    },
    'ngAria': {
      deps: ['angular'],
    },
    'ngMaterial': {
      deps: ['ngAnimate', 'ngAria'],
    },
    'd3': {
      exports: 'd3',
    },
    'application': {
      deps: [
        'app/services/d3',
      ]
    }
  },
  paths: {
    'application': '/app/js/main',
    'directives': '/app/js/directives',
    'app': '/app/js',
    'domReady': 'requirejs-domready/domReady',
    'angular': 'angular/angular',
    'd3': 'd3/d3',
    'ngAnimate': 'angular-animate/angular-animate',
    'ngAria': 'angular-aria/angular-aria',
    'ngMaterial': 'angular-material/angular-material',
  },
});

require(['domReady', 'app/config'], function(domReady, config) {
  domReady(function() {
    console.log("dom ready");
    require(['application'], function(app) { });
  });
});
