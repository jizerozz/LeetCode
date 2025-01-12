/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = {}
    for(let i of nums){
        if(answer[i]){
            answer[i]++
        }else{
            answer[i] = 1
        }
    }

    
    const res = Object.keys(answer).find(item=> answer[item] === 1)
    return Number(res)
};