/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCount = new Array(26).fill(0);
    for(let i = 0; i < s.length; ++i) {
        charCount[s[i].charCodeAt(0) - 97]++;
    }
    
    for(let i = 0; i < s.length; ++i) {
        if(charCount[s[i].charCodeAt(0) - 97] === 1) return i;
    }
    return -1
};