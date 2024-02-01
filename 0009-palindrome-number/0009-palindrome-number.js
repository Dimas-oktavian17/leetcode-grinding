/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
       let first = String(x).toLowerCase()
    let second = first.split('').reverse('').join('')
    // return Math.sign(x) === 1 && x[0] === x[-1] ? true : false
    // if (Math.sign(x) >= 1 && x[0] === x[-1]) {
    //     return true
    // } else {
    //     return false
    return Number(first) === Number(second) ? true : false
};