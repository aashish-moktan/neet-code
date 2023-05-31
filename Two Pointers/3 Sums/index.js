/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sums = [];
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    // if (nums[i] == nums[i + 1]) continue;
    const target = 0 - nums[i];
    if (i != 0 || nums[i] != nums[i + 1]) {
      const result = twoSum(nums, i + 1, nums.length - 1, target);
      if (result.length) {
        sums.push(result);
      }
    }
  }

  return sums;
};

var twoSum = function (nums, left, right, target) {
  let element = left - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      left++;
    } else if (nums[left] + nums[right] > target) {
      right--;
    } else {
      // let key = `${nums[element]}${nums[left]}${nums[right]}`;
      // if (!set.has(key)) {
      //   hashMap[key] = true;
      return [nums[element], nums[left], nums[right]];
      // }
    }
  }
  return [];
};

console.log(threeSum([0, 0, 0, 0]));
