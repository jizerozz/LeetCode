/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newArr = []
    let tempArr = [...arr]
    if(arr.length === 0) return []
    for(let i=0; i<arr.length; i+=size){
        newArr.push(tempArr.slice(i, i+size))
     
    }
    return newArr
};
