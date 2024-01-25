// +++++++++++++++++++++++++++++++ Undefined / Void +++++++++++++++++++++++++++++++

/**
 * Undefined:- Indicates that a function explicitly returns the value undefined. (Not commonly used)
 * Void:- Indicates that a function does not return any value. (commonly used)
 */

function add(n1: number, n2: number): number {
    return n1 + n2
}

 
function printResult(n1 :number): void {
    console.log('Result: ' + n1);
}

// printResult(add(5,4)) // 9


// +++++++++++++++++++++++++++++++ Function as types +++++++++++++++++++++++++++++++

/** Function types allow you to define the signature of a function, specifying the types 
 * of its parameters and the type of its return value. 
*/

// Function type declaration
let combineValues : (a: number, b: number) => number;

// combineValues = 5  // Not-Valid as combineValues is given a type of Function

combineValues = add; // Valid

// the below code is not satisfied does not match the Function type 
// combineValues = printResult; // Not-Valid as printResult does not take 2 variables as parameter and return number 

// console.log(combineValues(9,89)); // 98


// +++++++++++++++++++++++++++++++ Function callback +++++++++++++++++++++++++++++++

/**
 * Function callback is a function that is passed as an argument to another function and is executed after the 
 * completion of some operation.
 * 
 * 
 * '''Callback Functions''' can return something, even if the argument on which they're passed does NOT expect a returned value.
 */

function addAndHandle(n1:number, n2:number, cb: (num:number) => void) {
    const res = n1 + n2
    cb(res)
}


addAndHandle(2,3, (result) => {
    console.log(result);
});