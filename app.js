// Union type: string or number
var myVar;
function combine(n1, n2, resultType) {
    var result;
    if ((typeof n1 === 'number' && typeof n2 === 'number') || resultType === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    // if(resultType === 'as-number') {
    //     return +n1 + +n2
    // }
    // else { return result.toString()}
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
