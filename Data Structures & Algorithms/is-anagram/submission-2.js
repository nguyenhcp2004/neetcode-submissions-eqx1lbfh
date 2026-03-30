class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 1. Sort to compare
        
        // 2. aphabet in lowercase is only has 26 character so can use frenquency counter
        // charCodeAt: builtin func help to check the unicode of character
        if (s.length !== t.length) return false
        const count = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);
        
        // idea: create a count array and check into 2 array for the counter
        // if 1 entry in counter != 0 return false
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - aCode]++;
            count[t.charCodeAt(i) - aCode]--;
        }

        for (let i = 0; i < 26; i++) {
            if (count[i] != 0) return false;
        }
        
        return true
    }
}
