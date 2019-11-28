// String Reversal
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
// function reverse(string) {
//     return string.split('').reverse().join('')
// };

// Solution #2
// function reverse(string) {
//     let reversed = '';

//     for (let character of string) {
//         reversed = character + reversed;
//     };

//     return reversed
// };

// Solution #3
// function reverse(string) {
//     return string.split('').reduce((reversed, character) => character + reversed, '')
// };





// Palindromes
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

};