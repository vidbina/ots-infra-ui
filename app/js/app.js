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
     'app': {
        deps: ['app/services/d3']
      }
  },
  paths: {
    'app': '/app/js',
    'angular': 'angular/angular',
    'd3': 'd3/d3',
    'ngAnimate': 'angular-animate/angular-animate',
    'ngAria': 'angular-aria/angular-aria',
    'ngMaterial': 'angular-material/angular-material',
  },
  deps: ['app/main'],
});
