// function add(n1: number, n2: number) {
//     return n1+n2
// }

// const number1 = 3
// const number2 = 90

// // ERROR
// console.log(add(number1, number2))  //  Argument of type 'string' is not assignable to parameter of type 'number'.

enum Role {ADMIN = 5, READ_ONLY = 7, AUTHOR = 90};
const person = {
    name : "Bhavya",
    age : 54,
    hobby : ["Run", "laugh", "cry"],
    role : [101, "Bhavya Antiya"],
    enum1 : 4
}

console.log(person.name);



// +++++++++++++++++++++++++++++++++++++++++++++++++++ ENUMS +++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 *  'Enum', or 'enumeration', is a way to define a set of named numeric values. 
 * Enums provide a more readable way to work with constants and improve code maintainability. 
 */

// Direction is a numeric enum where each member is assigned a numeric value starting from 0. 
// The variable heading is assigned the value Direction.East.

enum Direction {
    North,   // 0
    East,    // 1
    South,   // 2
    West     // 3
  }
  
  let heading: Direction = Direction.East;
  console.log(heading); // Output: 1
  