function run() {
    let n = 10;
    let array = new Array();

    for (let i = 0; i < n; i++) {
        random = Math.floor(Math.random() * 100);
        array.push(random);
    }

    let rev = new Array();
    rev = reverseArr(array);

    console.log(array);
    console.log(rev);
    console.log(bubbleSort(array));

}

function reverseArr(input) {
    var rev = new Array;
    for (var i = input.length - 1; i >= 0; i--) {
        rev.push(input[i]);
    }
    return rev;
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] < inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};