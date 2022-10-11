const fibonacci = function fib(num) {
    if (num < 0) return "OOPS"; else 
    if (num == 0) return 0;

    let arr = [1, 1];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i] + (arr[i+1]));
    }
    return arr[num - 1];
};

//create a fibonacci sequence in an array
//identify number based on index in the fib array

// Do not edit below this line
module.exports = fibonacci;
