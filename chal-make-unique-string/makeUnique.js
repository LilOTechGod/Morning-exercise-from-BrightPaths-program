// Write your solution below:
// Make Unique String
// Difficulty
// Medium

// Concepts
// Loops, Conditionals, String Methods


// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

// function makeUnique(str) {
//     let solution = '';
//     let removeSpaces = str.trim();
//     let removeDuplicateLetters = str.map((cb, dup) => {
//         if(cb === dup){
//             solution = removeDuplicateLetters.slice()

//         }
//     })
//     return solution
// }

// console.log(makeUnique('helloworld'));
let makeUnique = 'helloworld';
console.log([...new Set(makeUnique)].join(""));


