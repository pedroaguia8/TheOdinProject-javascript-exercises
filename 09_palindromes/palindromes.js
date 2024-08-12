
// Check solution folder, it is way cleaner
const palindromes = function (sentence) {

    sentence = sentence.replace(/\s+/g, '');
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    sentence = sentence.toLowerCase();

    let len = sentence.length;
    let mid = Math.floor(len/2);

    for (let i = 0; i < mid; i++) {
        if(sentence[i] !== sentence[len - i - 1])
            return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
