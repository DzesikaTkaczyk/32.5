const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

function Round(n, k){
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
};

describe('calculateTotalPoints', () => {
    it('should return sum of points when points for gate and wind are positive', () => {
        const actual = Round((calculateTotalPoints(227.5, 'mamucia', 200, [5, 10, 0, 12, 20], 14, 12)), 1);
        const expected = 206;
        assert.equal(actual, expected);
    });

    it('should return sum of points when points for gate and wind are negaitve', () => {
        const actual = Round((calculateTotalPoints(100.5, 'big', 120, [14.5, 13, 16, 18.5, 18], -5, -12.3)), 1);
        const expected = 56.1;
        assert.equal(actual, expected);
    });

    it('should return sum of points when points for gate are negative and wind are positive', () => {
        const actual = Round((calculateTotalPoints(82.5, 'normal', 98, [12, 15, 16, 18, 18], 9.4, -3.2)), 1);
        const expected = 84.2;
        assert.equal(actual, expected);
    });

    it('should return sum of points when points for gate are positive and wind are negative', () => {
        const actual = Round((calculateTotalPoints(200, 'mamucia', 200, [12, 12, 16, 18.5, 17], -8, 3.2)), 1);
        const expected = 160.2;
        assert.equal(actual, expected);
    });
});

