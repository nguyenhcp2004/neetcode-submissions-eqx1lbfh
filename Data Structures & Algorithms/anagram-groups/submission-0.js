class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // idea 
        // create a map with unique key and value is array of anagram
        // check each entry in strs then have a map result
        // flapmap to an array value
        const result = {};
        for(let s of strs) {
           const sortedS = s.split('').sort().join('');
           if(!result[sortedS]) {
            result[sortedS] = [];
           }
           result[sortedS].push(s);
        };

        return Object.values(result);
    }
}
