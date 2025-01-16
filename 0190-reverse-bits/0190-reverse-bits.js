/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0
    let cnt = 32

    while (cnt--){
        res = (res << 1) | (n & 1)
        n = n >> 1
    }
    
    return res >>> 0
};