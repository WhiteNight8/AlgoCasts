// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution 1
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

//solution 2
// function reverse(str) {
//   let reverserd = ""
//   for (char of str) {
//     reverserd = char + reverserd
//   }
//   return reverserd
// }

// solution 3
function reverse(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed
  }, "")
}
module.exports = reverse
