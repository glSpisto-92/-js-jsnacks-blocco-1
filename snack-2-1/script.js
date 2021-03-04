/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

//for
var somma = 0;

for( var i = 1; i <= 5; i ++ ){

    var numero = parseInt(prompt('Inserisci un numero!'));

    somma = somma + numero;

}
console.log(somma);


//while
var i = 1;

while ( i <= 5 ){

    var numero = parseInt(prompt('Inserisci un numero!'));
    
    somma = somma + numero;
    
    i ++;
}
console.log(somma);
