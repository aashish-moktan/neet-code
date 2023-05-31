/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const count = {};
  let result = 0;
  let lptr = 0;
  let rptr = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1;
    while (rptr - lptr + 1 - Math.max(...Object.values(count)) > k) {
      count[s[lptr]] = count[s[lptr]]
        ? count[s[lptr]] - 1
        : delete count[s[lptr]];
      lptr += 1;
    }
    if (rptr - lptr + 1 - Math.max(...Object.values(count)) <= k) {
      length = rptr - lptr + 1;
      result = Math.max(length, result);
      rptr += 1;
    }
  }
  return result;
};

const result = characterReplacement("ABAB", 1);
console.log({ result });
