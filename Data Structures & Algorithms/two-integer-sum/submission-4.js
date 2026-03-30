class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapHep = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
            if (mapHep.has(diff)) {
                return [mapHep.get(diff), i]
            }
           mapHep.set(nums[i], i);
        }
    }
}
