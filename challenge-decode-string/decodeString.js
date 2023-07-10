// Write your code below this line
// Concepts
// Loops


// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

let decoder = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let num = parseInt(string[0]) // get the string of 2 to the number 2
    let str = string.slice(1)     // gets the decoded msg after the # 
    let solution = '';

    // console.log(num);
    // console.log(str);
    for (let i=0; i < str.length; i++) {
        solution += alphabet[alphabet.indexOf(str[i]) + num]
        // console.log(alphabet[alphabet.indexOf(str[0]) + num])
    }
    return solution
}

console.log(decoder("2fcjjm"));
// decoder("2fcjjm")