class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        let n  = nums.length, max = Number.MIN_SAFE_INTEGER;
        for (let start = 0 ; start < n ; start ++ ){
            let currentSum = 0;
            for (let end = start ; end < n ; end ++ ){
                currentSum += nums[end];
                max = Math.max(max, currentSum)
            }   
        }

        return max;


    }
}
