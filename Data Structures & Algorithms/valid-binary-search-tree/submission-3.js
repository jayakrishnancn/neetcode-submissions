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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {



        function check(node, left, right){
            if(!node){
                return true;
            }

            if( node.val <= left ){
                    return false;
            }
           if (node.val >= right){
                    return false;
            }
            
            return check(node.left, left, node.val) && check(node.right, node.val, right);
        }

        return check(root, -Infinity, Infinity);

    }
}
