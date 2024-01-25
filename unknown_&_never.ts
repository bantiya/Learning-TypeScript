// ++++++++++++++++++++++++++++++++++++++++++ Unknown Type ++++++++++++++++++++++++++++++++++++++++++

/**
 * 'Unknown' is a more restrictive type compared to 'any'.
 * Variables of type unknown are not assignable to any other types without explicit type assertions or type checks.
 * The 'unknown' type is often used when the exact type of a value is not known during development, but type checking is still desired.
 * Using 'unknown' is generally considered safer than using 'any' because it requires explicit type handling and helps catch type-related errors during development.
 */

let userInput : any;
let userName : unknown;

// 'unknown' type assignment
userInput = 5;
userInput = "Hello";

// Type assertion (casting)
userName = userInput as string;  // "Hello"

// console.log(userName); // "Hello" (Safe operation after type assertion or check)

userInput = "Hello Bhavya";

// Type check
if (typeof userInput === 'string') {
  userName = userInput; //"Hello Bhavya" (No need for type assertion inside the 'if' block)
}

// console.log(userName); // "Hello"


// ++++++++++++++++++++++++++++++++++++++++++ Never Type ++++++++++++++++++++++++++++++++++++++++++

/**
 * 'never' type represents a type that indicates a value that will never occur. It is used to represent functions 
 * that never return, or variables that are expected to have no possible values.
 */


// **************************** Functions that Never Return ****************************
// 'throwError' function is annotated with the never type, indicating that it never returns a value. It throws an error instead.

function throwError(message: string): never {
    throw {message: 'Error code :404'};
  }

// throwError("Bhavya")


// **************************** Infinite Loops ****************************
// The infiniteLoop function is annotated with never because it doesn't terminate.

function infiniteLoop(): never {
    while (true) {
      // Code that continues indefinitely
    }
  }

  // infiniteLoop()

  
// **************************** Type Guards ****************************
// The assertNever function is used as a type guard to ensure that the value inside the else branch is of type never.

function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
  }
  
  function processValue(value: string | number) {
    if (typeof value === "string") {
      console.log("String");    // Process string
    } else if (typeof value === "number") {
      console.log("Number");   // Process number
    } else {
      assertNever(value); // Type guard ensures 'value' is never
    }
  }
  