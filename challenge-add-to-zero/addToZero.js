// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

// for(let i=0; i<array.length; i++) {
//     if(array[i] + array[i] == 0) {
//         console.log("True");
//     }else {
//         console.log("False");
//     }
// }

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)
