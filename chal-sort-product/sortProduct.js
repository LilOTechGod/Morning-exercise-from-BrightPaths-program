// Sort by Product
// Difficulty
// Medium

// Concepts
// Loops, Math


// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4

// 2 => 2 * 2 = 4 -> Output-Pos 1

// 3 => 3 * 3 = 9 -> Output-Pos 2

// 4 => 4 * 4 = 16 -> Output-Pos 3

// 5 => 5 * 5 = 25 -> Output-Pos 5

// Output: 2, 3, 4, 23, 5
let arrInput = [23, 2, 3, 4, 5];

let productOfValue = (arr) => {
        arr.sort((a, b) => (a * (arr.indexOf(a) + 1)) - (b * (arr.indexOf(b) + 1)));
        return arr;
}

console.log(productOfValue(arrInput));