class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    seen = new Set(); 

    isHappy(n) {
       let numbers = (n + "" ).split("").map(Number);

       if(this.seen.has(n)){
        return false;
       }
    
        let sumOfSq = 0;
        for(let num of numbers) {
            sumOfSq += num * num;
        }

        if (sumOfSq == 1){
            return true;
        }
        this.seen.add(n);


        return this.isHappy(sumOfSq)

        
    }
}
