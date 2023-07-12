// Medium

// Concepts
// Loops, Conditionals


// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// // true

// >>> has_balanced_parens("(Oh Noes!)(")
// // false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

// >>> has_balanced_parens(")")
// // false

// >>> has_balanced_parens("(")
// // false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:

// >>> has_balanced_parens("Hey...there are no parens here!")
// // true

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
let totalPara = 0;

let has_balanced_parens = (sample1) => {
for(let i=0; i<sample1.length; i++) {
    let paraLeft = '(';
    let paraRight = ')';
   

    if(sample1[i] === paraLeft) {
        totalPara++
    }else if(sample1[i] === paraRight) {
        totalPara--
    }else if(totalPara < 0) {
        return false;
    }
}

if(totalPara === 0) {
    return true;
}else{
    return false;
}
}

console.log(has_balanced_parens("This ( is unbalanced."));