impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let unique_count = nums.iter().collect::<HashSet<_>>().len();
        unique_count != nums.len()
    }
}
