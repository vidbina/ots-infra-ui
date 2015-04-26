if (typeof define !== "function") {
  var define = require('amdefine')(module);
}

define(['exports'], function(exports) {
  'use strict';

  exports.controller = function(data) {
    var _data = data;
    var _title = 'Untitled';
    var _file_name = 'untitled.xml';
    var _drawable = undefined;
    var elements = [];

    this.getTitle = function() { return _title; };
    this.getFileName = function() { return _file_name; };
    this.getData = function() { return _data; };

    this.setDrawable = function(tool) { 
      switch(tool) {
        case 'link':
        case 'node':
          _drawable = tool;
          break;
        default:
          _drawable = undefined;
          break;
      }
    };
    this.getDrawable = function() { return _drawable; };
    this.setDrawingAction = function(action, details) {
    };

    this.getElements = function() { return elements; };
    this.addElement = function(item) { elements.push(item); };
  };
  //return this;
});
