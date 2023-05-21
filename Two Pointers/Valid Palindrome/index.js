/**
 * @param {string} string
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const replacedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let i = 0;
  let j = replacedString.length - 1;
  while (i <= j) {
    if (replacedString[i] !== replacedString[j]) {
      return false;
    }
    i++;
    j--;
    g;
  }
  return true;
};

console.log({ isValid: isPalindrome("A man, ama") });
