'use strict';

process.env.NODE_ENV = 'test';

var should = require('should');
var distance = require('../lib/distance');
var gpx = require('gpx-stream');
var fs = require('fs');

describe('gps-distance', function() {

  describe('distance', function() {

    it('should measure a distance correctly', function(done) {

      var libResult = distance(45.527517, -122.718766, 45.373373, -121.693604)
      libResult.should.be.approximately(81.784, 0.1);
      done();
      
    });

    it('should measure the distance of a short path correctly', function(done) {

      var path = [
        [45.527517, -122.718766],
        [45.373373, -121.693604]
      ];
      var libResult = distance(path);
      libResult.should.be.approximately(81.784, 0.1);
      done();
      
    });

    it('should measure the distance of a longer path correctly', function(done) {

      var points = new gpx();
      var source = fs.createReadStream('./test/oregon.gpx');
      var path = [];

      source.pipe(points);

      points.on('readable', function(){
        var point;

        while(point = points.read()){
          path.push([point.lat,point.lon]);
        }
      });

      points.on('end', function(){
        distance(path).should.be.approximately(7.7, 0.1);
        done();
      });

      
    });

  });

});
