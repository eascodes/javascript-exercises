const palindromes = function palCheck(str) {
    const arr = str
        .toLowerCase()
        .split("")
        .filter(letter => /^[a-zA-Z]+$/.test(letter));

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr.reverse()[i]) {
            continue;
        } else {return false;}
    } return true;
};

// Do not edit below this line
module.exports = palindromes;
