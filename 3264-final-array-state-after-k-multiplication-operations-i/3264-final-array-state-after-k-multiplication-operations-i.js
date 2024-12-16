/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
 
var getFinalState = function(nums, k, multiplier) {
    let num = []
    for(let i=0; i<k; i++){
        let minNum = Math.min(...nums)
        let operNum = minNum * multiplier
        num.push(operNum)
        let minIdx = nums.indexOf(minNum)
        nums[minIdx] = operNum
    }
    return nums
};