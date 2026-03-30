class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
       const result = [];
       // Sort
       nums.sort((a, b) => a-b);

       for (let i = 0; i < nums.length; i++) { 
            // get i to a pivot and check
            if (i > 0 && nums[i] === nums[i-1]) continue;

            // Two pointer between the pivot with 2 remain entry 
            let jLeft = i + 1;
            let kRight = nums.length - 1;
            while (jLeft < kRight) {
                const sum = nums[i] + nums[jLeft] + nums[kRight];
                // check logic problem
                if (sum === 0) {
                    result.push([nums[i], nums[jLeft], nums[kRight]]);

                    // also check to avoid duplicate pair sum
                    while (jLeft < kRight && nums[jLeft] === nums[jLeft + 1]) jLeft++;
                    while (jLeft < kRight && nums[kRight] === nums[kRight - 1]) kRight--; 
                    
                    jLeft++;
                    kRight--;
                } else if (sum < 0) {
                    jLeft++;
                } else {
                    kRight--;
                }
            } 
       }
       return result;
    }
}