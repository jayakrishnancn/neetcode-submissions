impl Solution {
    pub fn is_palindrome(s:  String) -> bool {
       let  new_s : String = s.chars().filter(|x| x.is_alphanumeric()).collect::<String>().to_lowercase();
    //    new_s = new_s;
       new_s == new_s.chars().rev().collect::<String>()
    }
}
