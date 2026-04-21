impl Solution {
    pub fn find_min(nums: Vec<i32>) -> i32 {
        let mut left = 0i32;
        let mut right = (nums.len() as i32) - 1;
        let mut first_true_index = -1;

        // The target "pivot" point is the first element 
        // where nums[mid] <= nums[last_element]
        let last_val = nums[nums.len() - 1];

        while left <= right {
            let mid = left + (right - left) / 2;

            // Feasibility check: Are we in the lower sorted half?
            if nums[mid as usize] <= last_val {
                first_true_index = mid;
                right = mid - 1; // Look left for an even earlier "true"
            } else {
                left = mid + 1; // Stay in the upper half, look right
            }
        }

        nums[first_true_index as usize]
    }
}