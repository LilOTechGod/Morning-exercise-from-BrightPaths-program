// String Decoder
// Difficulty
// Medium

// Concepts
// Loops
let decoder = code => {
    let number = 0; //keep track of how many chars to skip
    let decodedMsg = ''; //store decoded msg

    for(let i=0; i<code.length; i++) { //iterate through coded msg
        if(isNaN(code[i])) { //statement to check its a letter 
            decodedMsg += code[i] //add letter to decoded msg var
        }else { // if index i is a number
            number = parseInt(code[i]) // converts the string number into a number integer
            i += number; // I now update i to skip the integer number
        }
    }       
    return decodedMsg
}
console.log(decoder('0h2xce5ngbrdy'));
// Instructions
// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// Here are a few more examples:

// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'