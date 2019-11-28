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

function reverseInt(number) {
    let reversedInteger = number.toString().split('').reverse().join('');

    return parseInt(reversedInteger) * Math.sign(number)
};





// Max Character
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
    const charMap = {};

    for (let character of string) {
        charMap[character] = charMap[character] + 1 || 1;
    };

    let maxValue = '';
    let maxCount = 0;

    for (let key in charMap) {
        if (charMap[key] > maxCount) {
            maxValue = key;
            maxCount = charMap[key];
        };
    };

    return maxValue
};





// The Classic FizzBuzz!
// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {

};