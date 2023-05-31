/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let hashArray = [];
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (!hashArray.includes(s[i])) {
      hashArray.push(s[i]);
    } else {
      if (hashArray.length > len) {
        len = hashArray.length;
      }
      hashArray = [];
      hashArray.push(s[i]);
    }
  }
  return len;
};

const maxStringLength = lengthOfLongestSubstring("abcabccbb");
console.log(maxStringLength);
