// Find the Outlier
// Difficulty
// Medium

// Concepts
// Math, Logic, Conditionals


// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

const arr = [160, 3, 1719, 19, 11, 13, -21]

const uniqueNum = (arr) => {
    let even = [];
    let odd = [];

    for(let i of arr) {
        // console.log(arr);
        if(i % 2 === 0) {
            even.push(i);
        }else if(i % 2 !== 0) {
            odd.push(i);
        }
        // console.log(even)
        // console.log(odd)
    }

    if(odd.length > even.length) {
        return +even;
    }else {
        return +odd;
    }
}

console.log(uniqueNum(arr));


// const findOutlier = (arr) => {
//     const oddsArr = arr.filter(num => num % 2 !== 0);
//     const evenArr = arr.filter(num => num % 2 === 0);

//     if(oddsArr.length !== 0 && evenArr.length !== 1) {
//         return oddsArr
//     }else if(evenArr.length === 0 && oddsArr.length !==0) {
//         return evenArr
//     }else {
//         return 'invalid integers in array'
//     }
// }

// console.log(findOutlier(arr));