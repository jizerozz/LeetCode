/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0
    x = Math.abs(x)
    x = String(x).split('').reverse().join('')
    x = isNegative ? '-' + x : x
    x = Number(x); 

    return (x < -(2 ** 31) || x > 2 ** 31 - 1) ? 0 : x;
};