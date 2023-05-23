const RADIUS = 6371;

export const toRad = (n: number) => {
  return (n * Math.PI) / 180;
};

export const getDistance = (from: [number, number], to: [number, number]) => {
  const fromLat = toRad(from[0]);
  const fromLon = from[1];
  const toLat = to[0];
  const toLon = to[1];

  const dLat = toRad(toLat - fromLat);
  const dLon = toRad(toLon - fromLon);
  const radFromLat = toRad(fromLat);
  const radToLat = toRad(toLat);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(radFromLat) * Math.cos(radToLat);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return RADIUS * c;
};

const measurePath = (points: [number, number][]) => {
  return points.reduce(
    (memo: { lastPoint: [number, number] | null; distance: number }, point) => {
      const distance =
        memo.lastPoint === null ? 0 : getDistance(memo.lastPoint, point);
      return { lastPoint: point, distance: distance + memo.distance };
    },
    { lastPoint: null, distance: 0 }
  ).distance;
};

export default (
  fromLat: number | [number, number][],
  fromLon: number = 0,
  toLat: number = 0,
  toLon: number = 0
) => {
  if (typeof fromLat === "number") {
    return getDistance([fromLat, fromLon], [toLat, toLon]);
  }
  return measurePath(fromLat);
};
