/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let curr = head;
        let size = 0; 
        
        while(curr){
            curr = curr.next;
            size++;
        }

      
        let dummy = new ListNode();
        let prev = dummy;
        prev.next = head;
        for (let i = 0; i < (size - n); i++){
            prev = prev.next;
        } 
 
  // [ dummy,  5]
    // P
    
        prev.next = prev?.next?.next;

       


        return dummy.next;


    }
}
