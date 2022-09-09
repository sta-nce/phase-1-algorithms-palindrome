function isPalindrome(word) {
  // Write your algorithm here
  const palindrome = word.split("").reverse().join("");
  const checkPalindrome = palindrome === word ? true : false;
  return checkPalindrome;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  get the word from the function
  reverse the word
  compare the reversed word to the original word
  if word is equal to the original returns true
  else returns false
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
