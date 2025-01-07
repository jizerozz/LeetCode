/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const duplarr = new Set(nums)
    nums.length = 0
    nums.push(...duplarr)
    return nums.length
};