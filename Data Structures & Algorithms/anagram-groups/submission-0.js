class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const grupos = {};

        for (let i = 0; i < strs.length; i++) {
            const palavra = strs[i];


            const chave = palavra.split("").sort().join("");


            if (grupos[chave] === undefined) {
                grupos[chave] = [];
            }

            grupos[chave].push(palavra);
        }
        return Object.values(grupos);
    }
}
