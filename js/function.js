//classic fn
function name(param){
    //TODO with param
    console.log(param)
}

//anonymous
let fn = function(){}

//IIFE
( function(){
     alert('Hello word')
})

let array = [1,2,3,4,5]

//using "_" to not have warning whit no use
array.forEach(function (e,_index) {
    console.log(e)
})

array.flatMap(function (e,_index) {
    console.log(e)
})


//Arrow function

// function name(param){
//     //TODO with param
//     console.log(param)
// }
//to
 name2 = (param) => {
    //TODO with param
    console.log(param)
}


// let fn = function(){}
//to
let fn_a =() => {}


// array.forEach(function (e, index) {
//     console.log(e)
// })
//to
array.forEach( (e, index) => {
    console.log(e)
})
