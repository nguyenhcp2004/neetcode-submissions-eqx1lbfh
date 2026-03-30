class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let minVal = nums[0];
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            if (nums[l] <= nums[r]) {
                minVal = Math.min(minVal, nums[l]);
                break;
            }

            let m = l + Math.floor((r - l)/2);
            minVal = Math.min(minVal, nums[m]);
            if (nums[m] >= nums[l]) {
               l = m + 1; 
            } else {
                r = m - 1;
            }
        } 

        return minVal;
    }
}
