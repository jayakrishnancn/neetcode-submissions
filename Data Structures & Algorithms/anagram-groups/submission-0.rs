impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut res: HashMap<String, Vec<String>> = HashMap::new(); 
        for c in strs {
            let mut chars: Vec<char> = c.chars().collect(); 
            chars.sort(); 
            let sorted_s = chars.into_iter().collect();
            res.entry(sorted_s).or_default().push(c.clone())
        }
        res.into_values().collect()
    }
}
