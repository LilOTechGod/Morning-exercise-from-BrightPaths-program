// Build Tower
// Difficulty
// Medium

// Concepts
// Loops, Logic


// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// For example, a tower of 3 floors looks like this (note the spacing):

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like this:

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

function towerBuilder(nFloors) {
    var space = "";
    var star = "";
    var result = [];
    for (var i = 1; i <= nFloors; i++) {
        console.log(i);
      space = (" ").repeat(nFloors - i);
      console.log(space);
      star = ("*").repeat((2 * i) - 1);
      console.log(star)
      result.push(space + star + space);
    }
    return result;
  }
  console.log(towerBuilder(6));