/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init)=> {
    let data = init
    for(i of nums){
        data = fn(data, i)
    }
    return data
}