/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {

        let states = []; 


        for (let i = 0; i< pairs.length; i++){ 
            let j = i; 

            while(j > 0 && pairs[j - 1].key > pairs[j].key){
                let tmp = pairs[j];
                pairs[j] = pairs[j - 1]
                pairs[j - 1] = tmp;
                j --;
            }
            states.push([...pairs]);

        }
 
        return states;
    }
}
