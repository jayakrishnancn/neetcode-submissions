impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {

        let mut max_price = 0; 
        let mut min_buy = prices[0];

        for price in prices {
            max_price = max(max_price, price - min_buy);
            min_buy = min(min_buy, price);
        }

        max_price
    }
}