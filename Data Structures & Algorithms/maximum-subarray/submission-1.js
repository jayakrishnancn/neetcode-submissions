class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        let n  = nums.length, max = Number.MIN_SAFE_INTEGER;
        let currentSum = 0;
        for (let num of nums){
            currentSum += num;
            max = Math.max(max, currentSum);
            if(currentSum < 0){
                currentSum = 0;
            }
        }
        return max;


    }
}
