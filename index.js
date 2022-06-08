//Write a function that accepts a string as an argument
//then the function takes that argument and checks if it reads the same forwards and backwards
//the return value will be true if the word is a palindrome, and false if the word is not a palindrome
//a palindrome is a word that is the same read forwards and backwards.
//we only have to worry about lowercase letters and no special characters



function isPalindrome(word) {
  let stringArr = word.split("").reverse().join("")
  if(stringArr === word) {
    return true;
  }else{
    return false;
  }
}

/* 
define function isPalindrome with argument word
  define constant stringArr to equal word with split method 
  invoke reverse method on stringArr
  invoke join method on stringArr
  if stringArr is equal to word
    return true
  else
    return false
*/

/*
  line 9: define isPalindrome function that passes argument word
  line 10: stringArr undergoes the split method to turn the string into an array of elememts made of letters,
    then stringArr undergoes the reverse method to reverse the order of the new array,
    then stringArr undergoes the join method to turn the letter elements into a word
  line 11-15: declare an if function that returns true if stringArr is equal to stringArrCopy, 
    and returns false if stringArr is not equatl to stringArrCopy */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
