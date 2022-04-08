let array = new Array();
function randomValue(){
    let n = 4;
    let array = new Array();

    for (let i = 0; i < n; i++) {
        random = Math.floor(Math.random() * 100);
        array.push(random);
    }

document.getElementById('q1').innerHTML ="<p>" +  array[0] + "</p>"
document.getElementById('q2').innerHTML ="<p>" +  array[1] + "</p>"
document.getElementById('q3').innerHTML ="<p>" +  array[2] + "</p>"
document.getElementById('q4').innerHTML ="<p>" +  array[3] + "</p>"
doOperations(array)


}

function doOperations(ar){
    let sum = 0;
    let mult = 1;
    let sub = 0;
    let div = ar[0];
    for (var i = 0; i < ar.length; i++) {
      sum += ar[i];
      mult *= ar[i];
      sub -= ar[i];
      div /= ar[i];
    }
    document.getElementById('sum').value = sum;
    document.getElementById('sub').value = sub;
    document.getElementById('mul').value = mult;
    document.getElementById('div').value = div;

  }


