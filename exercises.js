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

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        };
    };
};





// Array Chunking
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        let lastElement = chunked[chunked.length - 1];

        if (!lastElement || lastElement.length === size) {
            chunked.push([element]);
        } else {
            lastElement.push(element);
        };
    };

    return chunked
};

// // Solution #2
function chunk(array, size) {
    const chunked = [];
        
    for (let index = 0; index < array.length; index += size) {
        chunked.push(array.slice(index, index + size));
    };
    
    return chunked
};

// Solution #3
function chunk(array, size) {
    const chunked = [];

    while (array.length > 0) {
        chunked.push(array.splice(0, size));
    };

    return chunked
};





// Anagrams
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
function anagrams(stringA, stringB) {
    const aCharacterMap = buildCharacterMap(stringA);
    const bCharacterMap = buildCharacterMap(stringB);
    
    // Object.keys returns an array of keys of object
    if (Object.keys(aCharacterMap).length !== Object.keys(bCharacterMap).length) {
        return false
    };
    
    for (let key in aCharacterMap) {
        if (aCharacterMap[key] !== bCharacterMap[key]) {
            return false
        };
    };

    return true
};

// helper function to build a character map
function buildCharacterMap(string) {
    const characterMap = {};

    for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
        characterMap[character] = characterMap[character] + 1 || 1;
    };

    return characterMap
};

// Solution #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
};

// helper function to clean up string and remove spaces & punctuations
function cleanString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
};





// Sentence Capitalization
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution #1
// function capitalize(string) {
//     const words = [];

//     for (let word of string.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     };

//     return words.join(' ')
// };

// Solution #2
function capitalize(string) {
    let result = string[0].toUpperCase();
    
    for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === ' ') {
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        };        
    };
        
    return result;
};





// Printing Steps
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1
function steps(number) {
    for (let row = 0; row < number; row++) {
        let stair = '';

        for (let column = 0; column < number; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            };
        };
        console.log(`'${stair}'`);    
    };
};

// Recursive tips
// function printNumber(number, decrement = 1) {
//     if (number === 0) {
//         return;
//     };

//     console.log(number);

//     printNumber(number - decrement);
// };

// printNumber(10);

// Solution #2
function steps(number, row = 0, stair = '') {
    // define the base case
    if (number === row) {
        return;
    };

    if (number === stair.length) {
        console.log(stair);
        return steps(number, row + 1);
    };

    if (stair.length <= row) {
        stair += '#'; 
    } else {
        stair += ' ';
    };

    steps(number, row, stair);
    
    // ternary expression way
    // const add = stair.length <= row ? '#' : ' ';
    // steps(number, row, stair + add);
};





// Two Sided Steps - Pyramids
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

};