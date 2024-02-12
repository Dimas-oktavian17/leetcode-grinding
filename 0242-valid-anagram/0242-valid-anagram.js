/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const itemEqual = s.length === t.length
    if(!itemEqual) return false
    return str(s) === str(t)
}
const str = (s)=> s.split('').sort((a,b)=>a.localeCompare(b)).join('')