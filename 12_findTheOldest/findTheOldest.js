const findTheOldest = function(arr) {
    for (let person of arr) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = 2023;
        }
    }
    arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth));
    let oldest = arr.pop();
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
