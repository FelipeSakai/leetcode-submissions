class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const contador = {};
        for (let i = 0; i < nums.length; i++) {
            const numeroAtual = nums[i];
            if (contador[numeroAtual] === undefined) {
                contador[numeroAtual] = 0;
            }
            contador[numeroAtual]++;
            if (contador[numeroAtual] > nums.length / 2) {
                return numeroAtual;
            }
        }
    }
}
