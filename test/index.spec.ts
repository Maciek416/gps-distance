import { getDistance } from '../src'
test('Two points text',
    () => {
        const result = getDistance([45.527517, -122.718766], [45.373373, -121.693604])
        expect(result).toBeCloseTo(81.784, 0.1)
    })