import * as a from './a.js';

describe('a', () => {
    test('foo', () => {
        expect(a.foo()).toEqual(42);
    })
})
