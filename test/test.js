'use strict';

process.env.NODE_ENV = 'test';

var should = require('should');
var distance = require('../lib/distance');

describe('gps-distance', function() {

  describe('distance', function() {

    it('should measure distances correctly', function(done) {

      var libResult = distance(45.527517, -122.718766, 45.373373, -121.693604)
      libResult.should.be.approximately(81.784, 0.1);
      done();
      
    });

  });

});
