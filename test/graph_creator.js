var assert = require("assert");
var requirejs = require("../bower_components/requirejs/require");
var chai = require("chai");
var expect = chai.expect;

var lib = require("../app/js/lib/graph_creator");

describe('Infrastructure Controller', function() {
  var subject = undefined;

  beforeEach(function() {
    //subject = new infraCtrl.controller('test');
  });

  it("has a GraphCreator class", function() {
    var gc = new lib(null, [], []);
    console.log(gc);
    gc.hi();
  });
});
