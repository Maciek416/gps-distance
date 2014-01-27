gps-distance
============

[![NPM](https://nodei.co/npm/gps-distance.png)](https://nodei.co/npm/gps-distance/)

A node module for performing distance calculations between GPS coordinates

Installation
------------

```
npm install gps-distance
```

Examples
========

`gps-distance` supports two syntaxes for convenience. You can measure just between two points and supply in your GPS coordinates as direct arguments to distance in the form `(source_lat, source_lon, destination_lat, destination_lon)`, or you can use an array of points each in `[lat,lon]` format. See the examples below.

Point to Point
--------------

```javascript

var distance = require('gps-distance');

// Measure between two points:
var result = distance(45.527517, -122.718766, 45.373373, -121.693604);

// result is 81.78450202539503
```

Array of GPS points
-------------------

```javascript

// Measure a list of GPS points along a path:
var path = [
  [45.527517, -122.718766],
  [45.373373, -121.693604],
  [45.527517, -122.718766]
];

var result2 = distance(path);

// result2 is 163.56900405079006
```

Measuring Distance From a .GPX File
-----------------------------------

To compute the distance travelled in a tracked GPX file, use `gps-distance` with the `gpx-stream` module ( http://npmjs.org/package/gpx-stream/ ).

```javascript

var GPXstream = require('gpx-stream');
var distance = require('gps-distance');

var points = new GPXstream();
var source = fs.createReadStream('./marathon.gpx');
var path = [];

source.pipe(points);

points.on('readable', function() {
  var point;

  while(point = points.read()) {
    path.push([point.lat, point.lon]);
  }
});

points.on('end', function() {
  console.log('Distance travelled: ' + distance(path) + ' km');
});
```


Notes
-----

Distances are returned in kilometers and computed using the Haversine formula.
