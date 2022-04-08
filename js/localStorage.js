const cookie = () => {
    let dato= prompt("Inserisci il tuo nome","Nome");
    document.cookie= `NomeUtente= ${dato}; ` ;
}

cookie();

const localStorage = () => {
    
}