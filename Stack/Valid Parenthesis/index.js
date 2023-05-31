/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let lastEl = stack[stack.length - 1];
    if (char === ")") {
      if (lastEl !== "(") {
        return false;
      } else {
        stack.pop();
      }
    } else if (char === "}") {
      if (lastEl !== "{") {
        return false;
      } else {
        stack.pop();
      }
    } else if (char === "]") {
      if (lastEl !== "[") {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length ? false : true;
};
