class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {};
        for (const num of nums){
            counts[num] = (counts[num] ?? 0) + 1;
        }

        let heap = new MinPriorityQueue(x => x[1]);

        for(const [num, count] of Object.entries(counts)){
            heap.enqueue([num, count]);
            if(heap.size() > k ) {
                heap.dequeue();
            }
        }

        let res = [];
        for (let i = 0; i< k; i++){
            const [num] = heap.dequeue();
            res.push(num)
        }

        return res;
    }
}
