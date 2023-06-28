function isPalindrome(word) {
  const lowerCase = word.toLowerCase();
  const reversedWord = lowerCase.split("").reverse().join("");

  if (lowerCase === reversedWord) {
    return true;
  } else {
    return false;
  }
}

// Testing the function
console.log(isPalindrome("Abba"));      // true
console.log(isPalindrome("Racecar"));   // true
console.log(isPalindrome("A"));         // true
console.log(isPalindrome("Robot"));     // false
console.log(isPalindrome("Ab"));        // false



/* 
  function argument returns true toLOwerCase if palindrome
  and false if not 
*/

/*
  my code should return true if my string word is a palindrome in lowercase
  and false if not.
*/





// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
