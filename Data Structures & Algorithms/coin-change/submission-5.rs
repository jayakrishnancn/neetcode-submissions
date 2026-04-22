use std::cmp::max;
impl Solution {
    
     pub fn check(index: usize, amount: i32, coins: &Vec<i32>, memo: &mut Vec<Vec<i32>>) -> i32 {
            
            if index == 0 {
                if amount % coins[index] == 0 {
                    return amount / coins[index];
                }
                return i32::MAX;
            }

            if memo[index][amount as usize] != -1 {
                return memo[index][amount as usize];
            }

            let no_take = Self::check(index - 1, amount, &coins, memo);
            let mut take = i32::MAX;
            if amount >= coins[index] {
                    let res = Self::check(index, amount - coins[index], &coins, memo);
                    if res != i32::MAX {
                        take = 1 + res ;
                    }
                
            }  
            memo[index][amount as usize] = min(take, no_take);
            return memo[index][amount as usize];

        }


    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {

        let mut memo  = vec![ 
            vec![-1;(amount + 1) as usize];
            coins.len()
        ];
        let res = Self::check(coins.len() - 1, amount, &coins, &mut memo);

        if res == i32::MAX {
            return -1 ;
        }

        return res;
    }
}
