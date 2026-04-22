class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // [ ... i-1, i , i+1, ... ]
        let memo = []; 

        function visit(i){

            if(i === 0 ){
                return nums[0]
            }
            if(i === 1) {
                return Math.max(nums[0], nums[1])
            }
            if(memo[i]){
                return memo[i];
            }


            const notTake = visit(i - 1);

            const take = visit(i-2) + nums[i]; 

            

            memo[i] = Math.max(
                notTake, 
                take
            )
            return memo[i];
        }
         return visit(nums.length - 1)
        
    }
}
