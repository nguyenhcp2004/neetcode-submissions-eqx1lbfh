class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyMin = prices[0];
        let maxP = 0;

        for (let sell of prices) {
            maxP = Math.max(maxP, sell - buyMin);
            buyMin = Math.min(buyMin, sell);
        }

        return maxP;
    }
}
