function convert(){

let binInput = document.getElementById("userInput").value;
document.getElementById("output").value = convertToDecimal(binInput);
} 

function convertToDecimal(x) {
    let digit = parseInt(x, 2);
    console.log(`Binary: ${digit}`);
    return digit;
}

