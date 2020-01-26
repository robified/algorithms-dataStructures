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
    return string
        .split('')
        .reverse()
        .join('');
};

// Solution #2
function reverse(string) {
    let reversed = '';

    for (let character of string) {
        reversed = character + reversed;
    };

    return reversed;
};

// Solution #3
function reverse(string) {
    return string
        .split('')
        .reduce((reversed, character) => character + reversed, '');
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
    const reversed = string.split('').reverse().join('');
    
    return string === reversed;
};

// Solution #2
function palindrome(string) {
    return string.split('').every((value, index) => {
        return value === string[string.length - index - 1]});
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
    let reversedInteger = number
                            .toString()
                            .split('')
                            .reverse()
                            .join('');

    return parseInt(reversedInteger) * Math.sign(number);
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

    return maxValue;
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

    return chunked;
};

// Solution #2
function chunk(array, size) {
    const chunked = [];
        
    for (let index = 0; index < array.length; index += size) {
        chunked.push(array.slice(index, index + size));
    };
    
    return chunked;
};

// Solution #3
function chunk(array, size) {
    const chunked = [];

    while (array.length > 0) {
        chunked.push(array.splice(0, size));
    };

    return chunked;
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
        return false;
    };
    
    for (let key in aCharacterMap) {
        if (aCharacterMap[key] !== bCharacterMap[key]) {
            return false;
        };
    };

    return true;
};
// helper function to build a character map
function buildCharacterMap(string) {
    const characterMap = {};

    for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
        characterMap[character] = characterMap[character] + 1 || 1;
    };

    return characterMap;
};

// Solution #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
};
// helper function to clean up string and remove spaces & punctuations
function cleanString(string) {
    return string
                .replace(/[^\w]/g, '')
                .toLowerCase()
                .split('')
                .sort()
                .join('');
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
function capitalize(string) {
    const words = [];

    for (let word of string.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    };

    return words.join(' ');
};

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

// Solution #1 - Iterative
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
function printNumber(number, decrement = 1) {
    if (number === 0) {
        return;
    };

    console.log(number);

    printNumber(number - decrement);
};
// printNumber(10); --> To test this function

// Solution #2 - Recursive
function steps(number, row = 0, stair = '') {
    // define the base case
    if (number === row) {
        return;
    };

    if (number === stair.length) {
        console.log(stair);
        return steps(number, row + 1);
    };

    if (stair.length <= row) { // # alternative way with ternary expression
        stair += '#'; 
    } else {
        stair += ' ';
    };

    steps(number, row, stair);
    
    // # ternary expression way
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

// Solution #1 - Iterative
function pyramid(number) {
    const midpoint = Math.floor((number * 2 - 1) / 2);

    for (let row = 0; row < number; row++) {
        let level = '';

        for (let column = 0; column < (2 * number - 1); column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            };
        };
    
    console.log(`'${level}'`);
    };
};

// Solution #2 - Recursive
function pyramid(number, row = 0, level = '') {
    // first base case for the row
    if (row === number) return;
    
    // second base case for the column
    if (level.length === (number * 2 - 1)) {
        console.log(`'${level}'`);
        // make the function call itself with an incremented row value
        return pyramid(number, row + 1);
    };
    
    // add conditional logic to increament level string value
    const midpoint = Math.floor((number * 2 - 1) / 2);
    
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        level += '#'
    } else {
        level += ' ';
    };

    // make the function call itself with incremented level string value
    pyramid(number, row, level);
};





// Finding Vowels
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1
function vowels(string) {
    let counter = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of string.toLowerCase()) {
        if (checker.includes(char)) {
            counter++;
        };
    };

    return counter;    
};

// Solution #2
function vowels(string) {
    const matches = string.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
};





// Spiral Matrix
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(number) {
    let results = [];
    
    for (let i = 0; i < number; i++) {
        results.push([]);
    };
    
    let counter = 1;
    let startColumn = 0;
    let endColumn = number - 1;
    let startRow = 0;
    let endRow = number - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        };
        startRow++;
        
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        };
        endColumn--;
        
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        };
        endRow--;
        
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        };
        startColumn++;
    };
    
    return results;
};





// Fibonacci
// --- Directions - 
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution #1 - Iterative
function fib(number) {
    const result = [0, 1];

    for (let i = 2; i <= number; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }

    return result[number];
};

// Solution #2 - Recursive
function fib(number) {
    if (number < 2) {
        return number;
    };

    return fib(number - 1) + fib(number - 2);
};

// Solution #3 - Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(number) {
    if (number < 2) {
        return number;
    };

    return fib(number - 1) + fib(number - 2);
};

const fib = memoize(slowFib);





// Queue
// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}





// Weave
// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }

    return q;
}





// Stack
// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}





// Queue From Stack
// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }
        
    add(record) {
        this.firstStack.push(record);
    }
    
    remove() {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }

        // this is the record we want
        const record = this.secondStack.pop();
        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }

        return record;
    }

    peek() {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }

        const record = this.secondStack.peek();

        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }

        return record;
    }   
}