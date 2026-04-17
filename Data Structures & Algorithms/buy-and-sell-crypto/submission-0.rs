impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {

            let mut ans = 0;
            let mut left_index = 0;
            let mut right_index = 1;
            while left_index <= right_index && right_index < prices.len() {
                if prices[left_index] > prices[right_index] {
                    left_index = right_index;
                    right_index +=1; 
                    continue;
                }
                ans = max(ans, prices[right_index] - prices[left_index]);
                right_index +=1;
            }
            ans
    }
}
// [7, 1, 5, 3, 6, 4]
//     L R 
//          ans = 5