const findTheOldest = function findIt(arr) {
    const currentYear = (new Date()).getFullYear();
    const updatedArr = arr.forEach(person => {
        if (!(person.yearOfDeath)) {
            person.yearOfDeath = currentYear;
        }
    })
    const sorted = arr.sort(function(a, b) {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        } else {return 1;}
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
