/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/

var container = [];

for( var i = 1; i <= 6; i++ ){

    var numero = parseInt(prompt('Inserisci un numero'));
    
    if( numero % 2 == 1){
        container.push(numero);
    }
}

console.log(container);