/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
// return arr.map(fn)
const data = []

for(const i in arr){
    data.push(fn(arr[i], +i))
}
    return data
};