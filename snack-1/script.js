//Snack.-1
/*L’utente inserisce due numeri in successione, con due prompt.
 Il software stampa il maggiore.*/

 var num1 = parseInt(prompt('Inserisci il primo numero'));
 var num2 = parseInt(prompt('Inserisci il secondo numero'));

 if( num1 > num2){
     document.writeln('Il primo numero ha vinto perchè maggiore : ' + num1 );
 } else if( num2 > num1){
     document.writeln( 'Il secondo numero ha vinto perchè maggiore : ' + num2);
 } else{
     document.writeln('i numeri sono uguali');
 }
