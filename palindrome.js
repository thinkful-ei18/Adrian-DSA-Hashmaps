'use strict';
const Hashmap = require('./hashmap');

function main () {

  function uniqueChars (string) {
    const chars = [];
    for (let i = 0; i < string.length; i++) {
      if (!(chars.includes(string[i]))) {
        chars.push(string[i]);
      }
    }
    return chars;
  }

  function palindrome(string) {
    const chars = uniqueChars(string);
    const hash = new Hashmap();
    let count = 0;

    for (let i = 0; i < chars.length; i++) {
      hash.set(chars[i], 0);
    }

    for (let j = 0; j < string.length; j++) {
      hash.set(string[j], (hash.get(string[j]) + 1));
    }

    for (let k = 0; k < chars.length; k++) {
      if (hash.get(chars[k]) % 2 !== 0) {
        count++;
      }
    }

    return count < 2;
  }
  console.log(palindrome('racecar'));
}

main();