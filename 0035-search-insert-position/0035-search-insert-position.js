/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        let answer = nums.length
    nums.forEach((item, idx) => {
        if (item >= target && answer === nums.length) {
            answer = idx
        }
    });
        return answer
};