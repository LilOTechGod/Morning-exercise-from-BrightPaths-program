// Write your solution below:
// T-Shirt Sorter
// Difficulty
// Medium

// Concepts
// Loops, Conditionals


// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// ssmmll

const uniqueString = (str) => {
    let tshirtSorterS = '';
    let tshirtSorterM = '';
    let tshirtSorterL = '';
    let solution = '';

    for(let i of str) {
        if(i === 's') {
            tshirtSorterS += i;
        }else if(i === 'm') {
            tshirtSorterM += i;
        }else if(i === 'l') {
            tshirtSorterL += i;
        }
    }
    return tshirtSorterS + tshirtSorterM + tshirtSorterL;
}

console.log(uniqueString('slsmmsllsmsmlmsls'));

// let tshirtValue = {s:1, m:2, l:3}
// function tshirtSorter(str){
//     str = str.trim().toLowerCase()
//     arr = str.split('')
//     // console.log(arr);
//     arr.sort((a,b)=> tshirtValue[a] - tshirtValue[b])
//     // console.log(arr);
//     arr = arr.join('')
//     return arr
// }
// console.log(tshirtSorter('smlsmlsml'))
// console.log(tshirtSorter('sssslllllmmmmssss'))