var arrOfNums = [1, 10, 12, 55, 23, 99, 89, 2];

function numsOverThirty() {
    var newArray = [];

    for (var i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] > 30) {
            newArray.push(arrOfNums[i]);
        }
    }
    return newArray;
};

console.log(numsOverThirty());

function numsUnderSixty() {
    var newArray = [];

    for (var i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < 60) {
            newArray.push(arrOfNums[i]);
        }
    }
    return newArray;
};

console.log(numsUnderSixty());
