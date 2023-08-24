function repeatedString(s, n) {   
    function areAllCharactersA(s) { return /^a*$/.test(s); }
    var result = 0
    var stringToArrayS = Array.from(s)
    function filterA(eachS) { return eachS === 'a' }
    if (areAllCharactersA(s)) { result = n } 
    else if (n > s.length) {
        var stringArrayAfterFilter = stringToArrayS.filter(filterA)
        var repeatedTime = Math.floor(n / s.length);
        result = stringArrayAfterFilter.length * repeatedTime
        console.log(result) 
        var remainingChars = n % s.length;
        console.log(remainingChars)
        var filterAfterSlice = []
        filterAfterSlice = stringToArrayS.slice(0, remainingChars).filter(filterA)
        console.log(filterAfterSlice) 
        result += filterAfterSlice.length
    } else if (n < s.length) {
        var stringToArrayS = Array.from(s)
        var remainingChars = n
        var filterAfterSlice = []
        filterAfterSlice = stringToArrayS.slice(0, remainingChars).filter(filterA)
        result += filterAfterSlice.length
    }
        
    return result
}

var s = "afcfffaged"
var n = 962645758455
console.log(repeatedString(s, n))

/* var s = "aba"
var n = 10

var s = "ababa"
var n = 3 */

/* var s = "afcfffaged"
var n = 962645758455 */