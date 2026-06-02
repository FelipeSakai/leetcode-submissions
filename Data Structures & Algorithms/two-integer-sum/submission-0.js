class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const ans = {};
        for (let i = 0; i < nums.length; i++) {
            const numeroAtual = nums[i];
            const complemento = target - numeroAtual;
            
            if (ans[complemento] !== undefined) {
                return [ans[complemento], i];
            }

            ans[numeroAtual] = i;
        }
    }
}
