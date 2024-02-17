const palindromes = function (str) {
    arr = str.toLowerCase().split('').filter(alphabet => alphabet != " " && alphabet != "," && alphabet != "!" && alphabet != ".")
    let revArr = [];
    for (let i = arr.length - 1 ; i >= 0 ; i--) {
        revArr.push(arr[i]);
    }
    if (arr.join("") == revArr.join("")) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
