class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        // [1,5,10] -> 12
        // 1 + take(10, 2), take(5, 12)

        function check(index, amount){
            if(index == 0){
                return amount % coins[index] == 0 ? amount / coins[index] : Infinity;
            }

            let notTake = check(index - 1, amount);
            let take = Infinity;
            if(amount >= coins[index]){
                take = 1 + check(index, amount - coins[index])
            }

            return Math.min(take, notTake);

            
        }

        let res = check(coins.length - 1, amount);
        return res == Infinity ? - 1: res; 
    }
}
