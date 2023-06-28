// function isPalindrome(word) {
//   const lowerCase = word.toLowerCase();
//   const reversedWord = lowerCase.split("").reverse().join("");

//   if (lowerCase === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Testing the function
// console.log(isPalindrome("Abba"));      // true
// console.log(isPalindrome("Racecar"));   // true
// console.log(isPalindrome("A"));         // true
// console.log(isPalindrome("Robot"));     // false
// console.log(isPalindrome("Ab"));        // false



// /* 
//   function argument returns true toLOwerCase if palindrome
//   and false if not 
// */

// /*
//   my code should return true if my string word is a palindrome in lowercase
//   and false if not.
// */





// // You can run `node index.js` to view these console logs
// // if (require.main === module) {
// //   // add your own custom tests in here
// //   console.log("Expecting: true");
// //   console.log("=>", isPalindrome("racecar"));

// //   console.log("");

// //   console.log("Expecting: false");
// //   console.log("=>", isPalindrome("robot"));
// // }

// // module.exports = isPalindrome;


// test case

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


     //reversing function

// function reverseString(word) {
//   // create an array from the input string
//   const wordArray = word.split("");
//   // reverse the array
//   const reversedWordArray = wordArray.reverse();
//   // create a string from the reversed array
//   const reversedWord = reversedWordArray.join("");
//   // return the reversed string
//   return reversedWord;
// }




function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
} 

function reverseString(word) {
  return word.split("").reverse().join("");
}



/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/



/*
  Add written explanation of your solution here
   I need to make an isPalindrome function that returns either true or false. 
 When the input string is the same forwards and backwards, I should return true. 
That means that if the input string is the same after I reverse it, I should return true. 
For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", so my solution should return true for these cases. 
"hi" in reverse is "ih", so my solution should return false for this case.


*/

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
