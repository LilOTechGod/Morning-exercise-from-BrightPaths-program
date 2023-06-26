// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let small = array[0];
let large = array[0];

for(let i=0; i<array.length; i++) {
    if(array[i] < small) {
        small = array[i]
    }
    if(array[i] > large) {
        large = array[i];
    }
}
console.log(small + '\n' + large);