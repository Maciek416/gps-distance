gps-distance
============

[![NPM](https://nodei.co/npm/gps-distance-es.png)](https://nodei.co/npm/gps-distance-es/)

Typescript refactoring version of [gps-distance](https://nodei.co/npm/gps-distance)

[简体中文](./README.md) | [English](./README_EN.md)

Installation
------------

```
npm install gps-distance-es
```

Examples
========

`gps-distance-es` supports two syntaxes for convenience. You can measure just between two points and supply in your GPS coordinates as direct arguments to distance in the form `(source_lat, source_lon, destination_lat, destination_lon)`, or you can use an array of points each in `[lat,lon]` format. See the examples below.

Point to Point
--------------

```typescript

import distance from 'gps-distance-es';

// Measure between two points:
const result = distance(45.527517, -122.718766, 45.373373, -121.693604);

// result is 81.78450202539503
```

Array of GPS points
-------------------

```typescript
import distance, { Point } from  'gps-distance-es';

// Measure a list of GPS points along a path:
const path:Point[] = [
  [45.527517, -122.718766],
  [45.373373, -121.693604],
  [45.527517, -122.718766]
];
var result2 = distance(path);
// result2 is 163.56900405079006
```

Notes
-----

Distances are returned in kilometers and computed using the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula).
