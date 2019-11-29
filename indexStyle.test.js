const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('should return style points with very diffrent grades', () => {
        const actual = calculateStylePoints([5, 10, 0, 12, 20]);
        const expected = 27;
        assert.equal(actual, expected);
    });

    it('should return style points with similar grades with half', () => {
        const actual = calculateStylePoints([14.5, 13, 16, 18.5, 18]);
        const expected = 48.5;
        assert.equal(actual, expected);
    });
    it('should return style points with double max grades', () => {
        const actual = calculateStylePoints([12, 15, 16, 18, 18]);
        const expected = 49;
        assert.equal(actual, expected);
    });
    it('should return style points with double min grades', () => {
        const actual = calculateStylePoints([12, 12, 16, 18.5, 17]);
        const expected = 45;
        assert.equal(actual, expected);
    });
});
