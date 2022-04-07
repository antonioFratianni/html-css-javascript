function generate(){
    let array1 = new Array()
    let array2 = new Array()

    array1 = createRandomArray(array1)
    array2 = createRandomArray(array2)

    document.getElementById("array1").value = array1;
    document.getElementById("array2").value = array2;

}

function createRandomArray(array){
    for (let i = 0; i < 10; i++) {
        random = Math.floor(Math.random() * 100);
        array.push(random);
    }
    return array;
}

function addiction(arr1,arr2){
    i = 0;
    for (; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
    document.getElementById("resultAddiction").value = arr3;

}

function multiplication(arr1,arr2){
    i = 0;
    for (; i < arr1.length; i++) {
        arr3[i] = arr1[i] * arr2[i];
    }
}

function subtraction(arr1,arr2){
    for (; i < arr1.length; i++) {
        arr3[i] = arr1[i] - arr2[i];
    }
}

function subtraction(arr1,arr2){
    for (; i < arr1.length; i++) {
        arr3[i] = arr1[i] / arr2[i];
    }
}
