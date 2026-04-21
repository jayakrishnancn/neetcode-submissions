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
     * @return {void}
     */

    // 1 , 2 , 3, 4, 5, 6
    // S   T   M  
    reorderList(head) {
        
        function findMid(head) {
            let fast = head.next; 
            let slow = head;
            while (fast?.next){
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow;
        }

        let middle = findMid(head);

        let secondHalf = this.reverse(middle.next);
        
        middle.next = null;
 
        
        while(secondHalf){
            let tmp = head.next;
            let tmp2 = secondHalf.next;

            head.next = secondHalf;
            secondHalf.next = tmp; 

            head = tmp;
            secondHalf = tmp2;
        }
       
 

    }

    reverse(node){
        let prev = null;
        let curr = node;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev
    }
}
