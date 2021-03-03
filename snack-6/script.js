/*Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

var numero = parseInt(prompt('Inserisci un numero!'));

for ( var i = 1; i <= numero; i++ ){
    if( i <= numero ){
        console.log(i * i * i);
    }
} 