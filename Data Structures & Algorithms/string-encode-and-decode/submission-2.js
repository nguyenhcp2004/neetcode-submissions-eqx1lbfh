class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => s.length + "#" + s).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [], i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.substring(i,j));
            res.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }
        return res;
    }
}