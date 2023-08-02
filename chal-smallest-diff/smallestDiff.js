
// Smallest Difference
// Difficulty
// Harder

// Concepts
// Algorithms, Runtime


// Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

const arrInputOne = [10, 20, 14, 16, 18];
const arrInputTwo = [30, 23, 54, 33, 96];

let smallestDiff = (arrOne, arrTwo) => {
    let difference = Math.abs(arrOne[0] - arrTwo[0]);

    for(let i=0; i<arrOne.length; i++) {
        for(let j=0; j<arrTwo.length; j++) {
            if(Math.abs(arrOne[i] - arrTwo[j]) < difference) {
                difference = Math.abs(arrOne[i] - arrTwo[j])
            }
        }
    }
    return difference;
}

console.log(smallestDiff(arrInputTwo, arrInputOne));