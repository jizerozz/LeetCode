/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    console.log(Object.keys(obj).length)
    return Object.keys(obj).length !== 0 ? false : true
};