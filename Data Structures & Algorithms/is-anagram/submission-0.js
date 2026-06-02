class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const contador = {};
        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            const letra = s[i];

            if (contador[letra] === undefined) {
                contador[letra] = 0;
            }

            contador[letra]++;
        }

        for (let i = 0; i < t.length; i++) {
            const letra = t[i];

            if (contador[letra] === undefined) {
                contador[letra] = 0;
            }

            contador[letra]--;

            if (contador[letra] < 0) {
                return false;
            }
        }

        return true;
    }
}
