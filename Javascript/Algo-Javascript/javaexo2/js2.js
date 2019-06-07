var randnb = Math.floor(Math.random() * 9);
var pastrouve = true;
var i = 0;

while(pastrouve && i != 4) {
  test = parseInt(prompt('Entrez un chiffre entre 0 et 9'));
  if(test < randnb) {
    alert("Trop bas");
  }
  else if( test > randnb) {
    alert('Trop haut');
  }
  else {
    alert("Bravo, c'était bien ' + test");
    pastrouve = false;
  }
  i++
  if(i == 4){
    alert('les 4 try echoué');
  }
}
