/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let cnt = 0
    for(let i=0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            words[j].startsWith(words[i]) && words[j].endsWith(words[i]) && cnt++
        }
    }
    return cnt
};