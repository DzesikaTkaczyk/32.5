const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('mamucia', () => {
        it('should return above average result on mamucia hill', () => {
            const actual = calculateDistancePoints(227.5, 'mamucia', 200)
            const expected = 153
            assert.equal(actual, expected);
        })

        it('should return below average result on mamucia hill', () => {
            const actual = calculateDistancePoints(120, 'mamucia', 200)
            const expected = 24
            assert.equal(actual, expected);
        })

        it('should return average result on mamucia hill', () => {
            const actual = calculateDistancePoints(200, 'mamucia', 200)
            const expected = 120
            assert.equal(actual, expected);
        })
    })

    describe('big', () => {
        it('should return above average result on big hill', () => {
            const actual = calculateDistancePoints(160, 'big', 120)
            const expected = 132
            assert.equal(actual, expected);
        })

        it('should return below average result on big hill', () => {
            const actual = calculateDistancePoints(100.5, 'big', 120)
            const expected = 24.9
            assert.equal(actual, expected);
        })

        it('should return average result on big hill', () => {
            const actual = calculateDistancePoints(120, 'big', 120)
            const expected = 60
            assert.equal(actual, expected);
        })
    })

    describe('normal', () => {
        it('should return above average result on big normal', () => {
            const actual = calculateDistancePoints(160, 'normal', 98)
            const expected = 184
            assert.equal(actual, expected);
        })

        it('should return below average result on big normal', () => {
            const actual = calculateDistancePoints(82.5, 'normal', 98)
            const expected = 29
            assert.equal(actual, expected);
        })

        it('should return average result on big normal', () => {
            const actual = calculateDistancePoints(98, 'normal', 98)
            const expected = 60
            assert.equal(actual, expected);
        })
    })
})


