function tombola(){

let randomArray = Array();
let myNumbers = [1,5,10,15,20,25,30,35,2,3];
randomArray = random(randomArray)
checkResult(myNumbers, randomArray)
}

function random(casual) {
    let maxLength = 90;
    for (let i = 0; i < maxLength; i++) {
        do {
            random = Math.floor(Math.random() * 100)            ;
        } while (casual.includes(random));
        casual.push(random);
    }
    return casual;
}

function checkResult(myArray, rndArray){
    var cont = 0;
    for(i=0; i<10; i++){
		tmp = rndArray[i];
		for(j=0; j<10; j++){
			if(tmp == myArray[j]){
				cont++;
			}
		}
	}
	if(cont == 2) alert("Ambo");
	else if(cont == 3) alert("Terna");
	else if(cont == 4) alert("Quaterna");
	else if(cont == 5) alert("Cinquina");
	else if(cont == 10) alert("Tombola");
	else alert("Game Over");

}