const fibonacci = function(fibIndex) {
    let a = 1;
    let b = 1;
    if (+fibIndex == 1 || +fibIndex == 2) {
        return 1;
    }
    else if (+fibIndex > 2) {
        let sum = 0;
        for (i = 3 ; i <= +fibIndex; i++) {
            sum = a+b;
            a = b;
            b = sum;
        }
        return sum;
    }
    else if (+fibIndex == 0) {
        return 0;
    }
    else if (+fibIndex < 0) {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
