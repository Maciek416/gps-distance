export declare type Point = [number, number];
export declare const toRad: (n: number) => number;
export declare const getDistance: (from: Point, to: Point) => number;
declare const _default: (fromLat: number | Point[], fromLon?: number, toLat?: number, toLon?: number) => number;
export default _default;
