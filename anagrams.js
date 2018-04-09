'use strict';
const Hashmap = require('./hashmap');

function main () {
  // input: array of strings
  // output: array of array of strings?

  function groupAnagrams(array) {
    const anagrams = new Hashmap();

    for (let i = 0; i < array.length; i++) {
      console.log
    }
  }

  groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);

  // initialize hashmap
  // create empty array
  // loop over the input
  // lowercase each string and remove whitespace???
  // enter for loop -
  // if the length of the strings aren't equal, send it into its own array
  // find words with matching characters
  // add words w/ matching characters into an array
  // exit for loop
  // push grouped words into an array
  // return array

  // write a condition that makes a hashmap a key from each of the words
  // value = anagrams
}

main();