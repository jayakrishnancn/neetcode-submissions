impl Solution {
    pub fn max_area(heights: Vec<i32>) -> i32 {

        let mut left_pointer = 0;
        let mut right_pointer = heights.len() - 1;
        let mut max_val = 0;

        while left_pointer < right_pointer {
            
            let area = ((right_pointer - left_pointer) as i32) * 
                min(heights[right_pointer], heights[left_pointer]);

            max_val = max(max_val, area);

            if heights[left_pointer] < heights[right_pointer] {
                left_pointer = left_pointer + 1;
            }else{
                right_pointer = right_pointer - 1;
            }
        }

        return max_val;
    }
}
