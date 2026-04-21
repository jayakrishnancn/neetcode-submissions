class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0, right = heights.length - 1;
        let max = 0;
        
        while (left < right){
            max = Math.max( 
                Math.min(heights[left], heights[right]) * (right-left) ,
                max
            );
            if (heights[left] < heights[right]){
                left ++;
            }else{
                right --;
            }
        }

        return max;
       

    }
}
