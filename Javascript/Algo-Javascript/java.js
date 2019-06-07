/* exo1 
var prenom = prompt("Entrez votre prénom");

       if(prenom.length >= 1 && prenom.length <=10)
       {

       		alert("c'est bon !");
       	}
       		else{
       			alert("degage");
       		}
*/

/* exo 2
var quest = String(prompt("Quel est le cheval blanc d'henry 4"));
var answer = "blanc";

if(quest === answer)
{
	alert("bravo");
}

else{
	alert("non");
}
*/

/* 
var nain = 7;
var i = Number(prompt("combien de nain dans les 7 nains"));

if (i === nain){
	alert("bravo");
}

else {
	alert("Non");
}
*/


var essai = 4;
while(essai !=0 ){
var ident = prompt("Veuillez rentrez votre identifiant");
var mdp = prompt("Veuillez rentre votre mdp");

if(ident.length>= 4 && ident.indexOf('@')+1){
	if(ident === "lea@gmail.com" && mdp === "12345"){
		alert("bravo josé");
		break;

	}
	else {
		alert("tu n'es pas josé");
		break;
	}
	}
	else {
		alert("Vous n'êtes pas prét");
	}
	essai-1;
}




