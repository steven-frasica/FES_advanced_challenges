/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

// const palindrome = (str) => {
//   console.log(str);
//   let revStr = str.split('').reverse().join('');
//   if (revStr === str) {
//     return true
//   } else {
//     return false
//   }
// };


// const palindrome = (str) => {
//   console.log(str);
//   let revStr = str.split('').reverse().join('');
//   return revStr === str 

// };

// const palindrome = (str) => {
//   const palindromeCheck = str.split("").every((char, index) => {
//     console.log(char, 'char')
//     console.log(char === str[index])
//     return char === str[str.length - 1 - index]
//   })
//   return palindromeCheck;
// }

// const palindrome = (str) => {
//   return str.split("").every((char, index) => (
//     char === str[str.length - 1 - index]
//   ))
// }

// const palindrome = (str) => {
//   const middle = Math.floor(str.length / 2)
//   for (let i = 0; i < middle; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false
//     } 
//   } return true
// }

const palindrome = (str) => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++) {
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex]) {
      return false
    }
  }
  return true;
}

module.exports = palindrome;
