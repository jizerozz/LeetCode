/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return Array.from(n.toString(2)).filter((item)=>item === '1').length
};