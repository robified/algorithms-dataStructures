// String Reversal
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
function reverse(string) {
    return string.split('').reverse().join('')
};

// Solution #2
function reverse(string) {
    let reversed = '';

    for (let character of string) {
        reversed = character + reversed;
    };

    return reversed
};

// Solution #3
function reverse(string) {
    return string.split('').reduce((reversed, character) => character + reversed, '')
};





// Palindromes
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1
function palindrome(string) {
    return string === string.split('').reverse().join('')
};

// Solution #2
function palindrome(string) {
    return string.split('').every((value, index) => value === string[string.length - index - 1])
};





// Integer Reversal
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

};