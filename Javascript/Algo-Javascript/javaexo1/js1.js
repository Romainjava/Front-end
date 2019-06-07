var varcontinue = 'true' //ma condition pour continuer
//je transforme mon true en "oui" //
while((varcontinue == 'true') || (varcontinue == 'oui')) {
  var op = prompt('+ - * /: ');
  var first = parseInt(prompt('Entrez le premier chiffre :'));
  var second = parseInt(prompt('Entrez le second chiffre :'));
//parsInt pour transformer en entier(chiffre) //
  switch (op) {
    case '+':
      result = first + second;
      alert('Résultat: ' + result);
      break;
    case '-':
      result = first - second;
      alert('Résultat: ' + result);
      break;
    case '*':
      result = first * second;
      alert('Résultat: ' + result);
      break;
    case '/':
      result = first / second;
      alert('Résultat: ' + result);
      break;
    default:
      alert('Opération non reconnu');
      break;
  }

  varcontinue = prompt('Voulez vous continuer? "oui ou non"'); // false pour sortir
}