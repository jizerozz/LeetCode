/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let num = []
     arr.forEach((item, idx)=>{
        num.push(fn(Number(item), idx))
    })

    return num
};