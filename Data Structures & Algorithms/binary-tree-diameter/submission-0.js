/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// Brute Force
// Time complexity O(N2)
// Space Complexity O(N)
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        // find diameter through leftHeight and rightHeight of subtree
        // => need a func maxHeight to calc 
        // find max diameter of subtree
       if (!root) return 0;

        let leftHeight = this.maxHeight(root.left);
        let rightHeight = this.maxHeight(root.right);
        
        let diameter = leftHeight + rightHeight;
        let sub = Math.max(this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right));
        return Math.max(diameter, sub)
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxHeight(root) {
       if (!root) return 0;

        return (1 + Math.max(this.maxHeight(root.left), this.maxHeight(root.right)));
    }
}
