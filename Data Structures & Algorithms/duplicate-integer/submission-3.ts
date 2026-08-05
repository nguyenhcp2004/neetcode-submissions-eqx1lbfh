class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
       // 1. Brute force with 2 loop i, j
       // 2. So sanh size cuar array va size set cua no

        // return (new Set(nums)).size !== nums.length; 
       // 3. Sort array -> so sanh entry i-1, i.
        nums.sort((a, b) =>  a - b); 
        for (let i = 0; i < nums.length; i++) {
           if (nums[i] === nums[i+1]) return true 
        }
       return false 
    }
}
