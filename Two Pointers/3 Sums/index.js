/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    if (i == 0 || nums[i] !== nums[i - 1]) {
      twoSum(nums, i + 1, nums.length - 1, target, result);
    }
  }
  return result;
};

var twoSum = function (nums, lptr, rptr, target, result) {
  let element = lptr - 1;
  let left = lptr;
  let right = rptr;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      left += 1;
    } else if (nums[left] + nums[right] > target) {
      right -= 1;
    } else {
      result.push([nums[element], nums[left], nums[right]]);
      while (left < right && nums[left] == nums[left + 1]) {
        left += 1;
      }
      while (left < right && nums[right] == nums[right - 1]) {
        right -= 1;
      }
      left += 1;
      right -= 1;
    }
  }
};
