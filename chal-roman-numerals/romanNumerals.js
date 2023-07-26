// Roman Numerals
// Difficulty
// Medium

// Concepts
// General, Math


// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// Decimal

// Roman

// 1 = I

// 5 = V

// 10 = X

// 50 = L

// 100 = C

// 500 = D

// 1,000 = M

// For example:

// toRoman(5)
// 'V'3

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:

// toRoman(99)
// 'LXXXXVIIII'

let toRomanNum = (num) => {
    let solution = [];
    // let romanNum = [{
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000
    // }]

    // for(let i of romanNum) {
    //     if(num == i) {
    //         return i
    //     }
    // }

    while(num > 0) {
        if(num >= 1000) {
            solution.push('M');
            num -= 1000
        }else if(num >=500) {
            solution.push('D')
            num -= 500
        }else if(num >= 100) {
            solution.push('C')
            num -= 100
        }else if (num >= 50) {
            solution.push('L')
            num -= 50
        }else if (num >= 10) {
            solution.push('X')
            num -= 10
        }else if(num >= 5) {
            solution.push('V')
            num -= 5
        }else if(num >= 1) {
            solution.push('I')
            num -= 1
        }
    }
    return solution.join('');
}

console.log(toRomanNum(105));
