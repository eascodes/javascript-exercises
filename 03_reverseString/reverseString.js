const reverseString = function(str) {
    let splitStr = str.split('');
    let reversed = splitStr.reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
