class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const n = nums.length;
        const dup = {};

        for (let i = 0; i < n; i++) {
            const numero = nums[i];

            if (dup[numero] === true) {
                return true;
            }

            dup[numero] = true;
        }

        return false;
    }
}