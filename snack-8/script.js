/*Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero.*/

var numeroUtente = prompt('Inserisci un numero da 4 cifre');

var somma = 0;

for( var i = 0; i < numeroUtente.length; i++ ) {
    somma += parseInt(numeroUtente[i]);
}
console.log(somma);