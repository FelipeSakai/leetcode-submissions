class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";
        const primeiraPalavra = strs[0];
        for (let i = 0; i < primeiraPalavra.length; i++) {
            const letraAtual = primeiraPalavra[i];
            for (let j = 1; j < strs.length; j++) {
                const palavraAtual = strs[j];

                if (palavraAtual[i] !== letraAtual) {
                    return prefix;
                }
            }
            prefix += letraAtual;
        }
        return prefix;
    }
}
