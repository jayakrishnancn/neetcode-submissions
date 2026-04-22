class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo1 = [] , memo2 = []
        function visit(i, nums, memo){

            if(i <= 0) {
                return nums[0];
            }
 
            if(i == 1){
                return Math.max(nums[0], nums[1]);
            }

            if(memo[i]){
                return memo[i]
            }

            const take = visit(i-2, nums, memo) + nums[i];
            const noTake = visit(i-1,nums, memo);
            memo[i] = Math.max(take, noTake);
            return memo[i];
            
        }
       
       if(nums.length == 1){
            return nums[0]
       }

        const [ __, ...nums2] = nums;
        nums.pop();

        return Math.max(visit(nums.length - 1, nums, memo1), visit(nums2.length - 1, nums2, memo2));
        // return visit(nums.length - 1, nums);
    }
}
