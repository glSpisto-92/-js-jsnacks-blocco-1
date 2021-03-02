/*In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/

//login per accedere al party
var nome = prompt('Inserisci il tuo nome per accedere al party Inzaghi');

//lista dei nomi autorizzati alla festa del grande Inzaghi
var invitati = ['Temistocle','Geppino','Astolfo','Ermanno','Bertoldo','Armando'];

var trovato = false;

for ( var i = 0; i < invitati.length; i++){
  console.log(invitati[i]);

    if ( invitati[i] == nome){
    
    trovato = true;
    }
}

if( trovato ){
    alert('Ok, puoi accedere al party!');
} else {
    alert(' Dove vai poveraccio. Sparisci!');
}