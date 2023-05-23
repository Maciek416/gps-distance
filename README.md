gps-distance-es
============

[![NPM](https://nodei.co/npm/gps-distance-es.png)](https://nodei.co/npm/gps-distance-es/)

[gps-distance](https://nodei.co/npm/gps-distance)的Typescript重构版

[简体中文](./README.md) | [English](./README_EN.md)

安装
------------

```
npm install gps-distance-es
```

Examples
========

`gps-distance-es` 支持两种调用方式.如果是测量两点距离，可以用 `(source_lat, source_lon, destination_lat, destination_lon)`方式调用, 如果要计算多点组成的路径长度，则可以传入一个 `[lat,lon]` 格式的数组. 详见下方示例.

点对点
--------------

```typescript

import distance from 'gps-distance-es';

// 计算两点距离:
const result = distance(45.527517, -122.718766, 45.373373, -121.693604);

// 81.78450202539503
```

坐标数组
-------------------

```typescript
import distance, { Point } from  'gps-distance-es';

// 计算多点路径的长度:
const path:Point[] = [
  [45.527517, -122.718766],
  [45.373373, -121.693604],
  [45.527517, -122.718766]
];
var result2 = distance(path);
// 163.56900405079006
```

注意
-----

距离利用[半正矢公式](https://zh.wikipedia.org/wiki/%E5%8D%8A%E6%AD%A3%E7%9F%A2%E5%85%AC%E5%BC%8F)计算，返回单位为公里，所以计算结果仅为大致距离，不能代表精确距离
