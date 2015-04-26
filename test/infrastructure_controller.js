var assert = require("assert");
var requirejs = require("../bower_components/requirejs/require");
var chai = require("chai");
var expect = chai.expect;

var infraCtrl = require("../app/js/lib/infrastructure_controller");

describe('Infrastructure Controller', function() {
  var subject = undefined;

  beforeEach(function() {
    subject = new infraCtrl.controller('test');
  });

  it('contains an empty set of elements by default', function() {
    expect(subject.getElements()).to.eql([]);
  });

  it('allows adding to elements', function() {
    subject.addElement('nice');
    subject.addElement(12);
    expect(subject.getElements()).to.eql(['nice', 12]);
  });

  it('exposes elements internals', function() {
    // TODO: Unsafe as state is changeable by user! Repair by deepCopy arr.
    subject.addElement('cool');
    subject.addElement('rap');
    subject.getElements().push('something');
    subject.addElement(26);
    expect(subject.getElements()).to.eql(['cool', 'rap', 'something', 26]);
  });

  it('drawable is undefind by default', function() {
    expect(subject.getDrawable()).to.equal(undefined);
  });

  it('tool can only be a valid tool', function() {
    subject.setDrawable('bogus');
    expect(subject.getDrawable()).to.equal(undefined);
    subject.setDrawable('node');
    expect(subject.getDrawable()).to.equal('node');
    subject.setDrawable('nonsense');
    expect(subject.getDrawable()).to.equal(undefined);
  });
});
