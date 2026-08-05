class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
       // 1. Brute force with 2 loop i, j
       // 2. So sanh size cuar array va size set cua no
       // 3. Sort array -> so sanh entry i-1, i.
        return (new Set(nums)).size !== nums.length; 

    }
}
