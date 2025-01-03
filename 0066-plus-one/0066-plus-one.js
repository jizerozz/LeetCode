/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return String(BigInt(digits.join(''))+1n).split('').map(item=>Number(item))
};