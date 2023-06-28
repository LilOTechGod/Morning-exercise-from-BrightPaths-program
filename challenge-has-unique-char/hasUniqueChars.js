// Write your code below
// Concepts
// Sets, Conditions

// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

// function hasUniqueChars(str, x) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < x.length; j++) {
//       if (str[i] === str[j]) {
//         console.log('false');
//         return false;
//       }
//     }
//   }
//   console.log('true');
//   return true;
// }


// hasUniqueChars('Oscarr', 'Alex');

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  
  console.log(hasUniqueChars('Oscar'));