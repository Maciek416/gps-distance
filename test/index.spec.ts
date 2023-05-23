import distance, { Point } from '../src';
test('Two points test',
    () => {
        const result = distance(40.01310039659863, 116.3228666932373, 39.99232418365557, 116.32441164562988);
        expect(result).toBeCloseTo(2.3165,1);
    });

test('Multi points test', () => {
    const points: Point[] = [
        { "lat": 39.98548505998512, "lng": 116.30432726452636, "height": 0 },
        { "lat": 39.98614269778466, "lng": 116.33316637585449, "height": 0 },
        { "lat": 39.992455698554, "lng": 116.33316637585449, "height": 0 },
        { "lat": 39.992061153099044, "lng": 116.31634356091308, "height": 0 }].map(i => [i.lat, i.lng]);
    const result = distance(points);

    expect(result).toBeCloseTo(4.5991, 1);
});