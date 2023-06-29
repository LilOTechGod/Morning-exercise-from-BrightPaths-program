// Write your code below
// Loops, General


// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true
// case sensitive!!!

let isPalindrom = function(word) {
    for(let i=0; i<word.length; i++) {
        for(let j = word.length -1; j>0 ; j--){
            if(word[i] === word[j]) {
                console.log(`the word ${word} is palindrom`);
                return true;
            }else {
                console.log(`this word ${word} is not palindrom`);
                return false
            }
        }
    }
}

isPalindrom('oscar');

// function isPalindromeWord(word) {
//     let j = word.length - 1
//     for (let i = 0; i < (word.length - 1) / 2; i++) {
//       if (word[i] !== word[j]) {
//         console.log('false');
//         return false
//       }
//       j--
//     }
//     console.log('true');
//     return true
//   }

//   isPalindromeWord('noon');