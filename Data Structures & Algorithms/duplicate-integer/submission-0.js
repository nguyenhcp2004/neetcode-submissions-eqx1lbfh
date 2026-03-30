class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 2 loop with i, j and check each entry
        // O(n2)

        // use Set, space complexity O(n)
        //  we can use lenght of set and length of array
        return new Set(nums).size < nums.length;
    }
}
