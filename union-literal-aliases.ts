// +++++++++++++++++++++++++++++ Union Type +++++++++++++++++++++++++++++

// """Union type""": string or number
// Union types allow a variable or parameter to have multiple types.

/**
 * // Union type: string or number
 * let myVar: string | number; 
 * myVar = "Hello";  // Valid
 * myVar = 42;       // Valid
 * // myVar = true;  // Not-Valid
 * // Error: Type 'boolean' is not assignable to type 'string | number'
 */



// +++++++++++++++++++++++++++++ Literal Type +++++++++++++++++++++++++++++

// """Literal types""" allow you to 'specify exact '''values'''' that a variable, parameter, or property can have.

/**
 * let status: "success" | "error";
 * status = "success";  // Valid
 * status = "error";    // Valid
 * // status = "warning";  // Not-Valid
 * // Error: Type '"warning"' is not assignable to type '"success" | "error"'
 */


// +++++++++++++++++++++++++++++ Type Aliases +++++++++++++++++++++++++++++

/**
 * Type alias is a way to create a name for a type. It allows you to define complex types or combinations 
 * of types with a single name, making your code more readable and maintainable. Type aliases are especially 
 * useful when dealing with union types, intersection types, or custom types.
 */
type Combinable = string | number  // Type Aliases
type ConversionDescriptor = 'as-number' | 'as-text' // Type Aliases


//                                                       ( literal type {used specific values} )
function combine(n1: Combinable, n2:Combinable, resultType: ConversionDescriptor) {
    let result : Combinable;
    if((typeof n1 === 'number' && typeof n2 === 'number') || resultType === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    // if(resultType === 'as-number') {
    //     return +n1 + +n2
    // }
    // else { return result.toString()}
    return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
