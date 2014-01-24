gps-distance
============

[![NPM](https://nodei.co/npm/gps-distance.png)](https://nodei.co/npm/gps-distance/)

A node module for performing distance calculations between GPS coordinates

Example
-------

```javascript

var distance = require('gps-distance');


// Between two points:

var result = distance(45.527517, -122.718766, 45.373373, -121.693604);

// result is 81.78450202539503


// Along a path:
var path = [
  [45.527517, -122.718766],
  [45.373373, -121.693604],
  [45.527517, -122.718766]
];

var result2 = distance(path);

// result2 is 163.56900405079006

```

Notes
-----

Distances are returned in kilometers and computed using the Haversine formula.