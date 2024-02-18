/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const nonAlphanumeric = s.replace(/[^a-zA-Z0-9]/g, '');
    const lowercase = nonAlphanumeric.toLowerCase();
    let left = 0, right = nonAlphanumeric.length - 1;
    while(left <= right){
        if(lowercase[left] !== lowercase[right]) return false
        ++left;
        --right;
    }
    return true;
};