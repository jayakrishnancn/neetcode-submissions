impl Solution {

    fn matching_opening (c: char) -> char{
        match c {
            ')' => '(',
            '}' => '{',
            ']' => '[',
            _ => ' ',
        }
    }
    pub fn is_valid(s: String) -> bool {
        
        let mut stack : Vec<char> = vec![]; 

        for c in s.chars(){
            
            if ['(' ,'{', '[' ].contains(&c) {
                stack.push(c);
            }
            else{
                match stack.pop() {
                    Some(top) => if top != Self::matching_opening(c) {
                        return false
                    }
                    None => return false
                } 
            }
        }

        stack.is_empty()
    }
}
