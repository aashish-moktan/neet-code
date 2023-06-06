/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    if(nums[l] <= nums[r]) {
        return nums[0];  
    }

    while(l <= r) {
        let mid = parseInt((l + r) / 2);
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1];
        } else if(nums[mid-1] > nums[mid]) {
            return nums[mid];
        } else if(nums[mid] > nums[r]) {
            l = mid + 1;
        } else if(nums[mid] < nums[l]) {
            r = mid - 1;
        }
    }
        
};