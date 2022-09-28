
const sumAll = function(x,y) {

let answer = 0;

if (x >= 0 && y >= 0 && Number.isInteger(x) && Number.isInteger(y)) {
    if (x < y) {
        for (i = x; i <= y; i++) {
            answer += i;
        }
    } else if (x > y) {
        for (i = y; i <= x; i++) {
            answer += i;
        }
    }
} else {return "ERROR";}

return answer;
};

// Do not edit below this line
module.exports = sumAll;
