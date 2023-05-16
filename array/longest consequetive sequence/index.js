// Longest consequetive sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashSet = new Set(nums);
  let longestConseq = 0;

  for (let i = 0; i < nums.length; i++) {
    const left = nums[i] - 1;
    if (!hashSet.has(left)) {
      let length = 0;
      let num = nums[i];
      while (hashSet.has(num)) {
        num += 1;
        length += 1;
      }

      longestConseq = Math.max(longestConseq, length);
    }
  }

  return longestConseq;
};

const longestLength = longestConsecutive([
  100, 101, 300, 103, 104, 105, 1, 5, 3, 5, 6, 8, 102,
]);
console.log("Longest consequetive sequence = ", longestLength);
