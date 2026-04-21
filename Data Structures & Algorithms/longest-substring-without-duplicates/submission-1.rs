impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let s = s.as_bytes();
        let mut max_length = 0;
        let mut left = 0 ;
        let mut set = HashSet::new();

        for right in 0..s.len() {
            
            while set.contains(&s[right]) {
                set.remove(&s[left]);
                left += 1; 
            }
            set.insert(s[right]);
            max_length = max_length.max(right-left + 1);
        }

        max_length as i32
    }
}
