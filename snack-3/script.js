/*Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti*/

var somma = 0;

for( var i = 1; i <= 10; i++ ){

    var numeri = parseInt(prompt('Inserisci un numero'));
    
    somma = somma + numeri;

    console.log(somma);
} 
