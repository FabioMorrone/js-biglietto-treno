
// numero di chilometri che vuole percorrere l'utente
const kmPercorribili = Number(prompt("inserire il numero di km da percorrere , 10,15,20 ecc.."));
console.log(kmPercorribili);



// età dell'utente
const etàDelPasseggero = Number(prompt("inserire l'età del passeggero")); 
console.log(etàDelPasseggero);


// prezzo totale del viaggio

let prezzoBiglietto = kmPercorribili * 0.21;
console.log(prezzoBiglietto);


        
 if (età < 18) {
    const sconto = (prezzoBiglietto * 20) / 100;
    console.log(sconto);
    
    const prezzoTotale = (prezzoBiglietto - sconto)
    console.log(prezzoTotale);
    
 }

