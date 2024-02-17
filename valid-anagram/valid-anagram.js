/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const countStr1 = new Array(26).fill(0);
    const countStr2 = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; ++i) {
        countStr1[s[i].charCodeAt(0) - 97]++;
        countStr2[t[i].charCodeAt(0) - 97]++;   
    }
    for(let i = 0; i < 26; ++i) {
        if(countStr1[i] !== countStr2[i]) return false
    }
    return true;
};