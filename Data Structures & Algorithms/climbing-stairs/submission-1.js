class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = []; 
        function jump(i){

           if(i == 0){
                return 0;
           }

           if( i  === 1){
            return 1;
           }
           if( i == 2){
            return 2;
           }
           if(memo[i]){
            return memo[i];
           }
           

           memo[i] = jump(i-1) + jump (i - 2);
           return memo[i];
        }

        return jump(n)

    }
}
