const hasMoreVowels = (word) => word.match(/[aeiou]/gi).length > word.length / 2

console.log(hasMoreVowels('moose')) 
console.log(hasMoreVowels('mice')) 
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay')) 
console.log(hasMoreVowels('Aal'))