class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = {}
        function take(amount){
            if(amount == 0 ){
                return 0;
            }
            if(memo[amount]){
                return memo[amount];
            }
            let res = Infinity;
            for (let coin of coins){
                if(amount - coin >= 0){
                res = Math.min(res, 
                        1 + take(amount - coin),
                    )
                }
            }
            memo[amount] = res;
            return res;
        }

        let res =  take(amount) 

        return res == Infinity ? -1 : res;
      
    }
}
