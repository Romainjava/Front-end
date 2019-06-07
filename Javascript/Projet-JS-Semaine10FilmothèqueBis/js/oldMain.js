//document.getElementById('film').innerHTML = "hello world"

let films = [{
    titre: "Star wars",
    auteur: "George lucas",
    dateDeSortie: 1970,
    acteur: ["Harrison ford", "christen stewart"],
    synopsis: " La guerre des étoiles",
    nombreEntree: 1.5 + "m", // un int
}, {
    titre: "La boussole d'or",
    auteur: "Chris Weitz",
    //key acteur en valeur un tableau et des key pour aller les chercher
    /*   acteur: [{prenom: "rob", nom: "bor"},
               {prenom: "luke", nom:"Skywalker"}], */
    dateDeSortie: "2008.",
    synopsis: "L'histoire commence lorsqu'elle parvient à empêcher...",
    nombreEntree: 5000,
}, {
    titre: "Le seigneur des anneaux",
    auteur: "Peter jackson",
    dateDeSortie: 2000,
    synopsis: "Un anneau pour les gouverner tous",
    nombreEntree: 10 + "m"
},
{
    titre: "Le seigneur des anneaux2",
    auteur: "Peter jackson",
    dateDeSortie: 2003,
    synopsis: "Un anneau pour les gouverner tous",
    nombreEntree: 10 + "m"
},
{
    titre: "Le seigneur des anneaux3",
    auteur: "Peter jackson",
    dateDeSortie: 2005,
    synopsis: "Un anneau pour les gouverner tous",
    nombreEntree: 10 + "m"
},
{
    titre: "Pirate des caraibes",
    auteur: "jecpas",
    dateDeSortie: 2000,
    synopsis: "Un anneau pour les gouverner tous",
    nombreEntree: 10 + "m"
},
];
//Manipulation du DOM et création d'une liste affichant  helloWorld
//j'attrape l'element avec un l'id film
// je modifie "inner" l'html par "<li>hello world</li>"
//document.getElementById('film').innerHTML = "<li>hello world</li>"

films.forEach(element => {

let filmSelection = document.getElementById('film');

filmSelection.innerHTML += `<div class="mesfilm"><p> titre du film: ${element.titre}</p>
                            <p>Réalisateur: ${element.auteur}</p>
                            <p>Nombre d'entrée vendu: ${element.nombreEntree}</p>                                  
                            <p>Synopsis du film: ${element.synopsis}</p>
                            <p>Date de sortie: ${element.dateDeSortie}</p>
                            </div> `
//button onclick et pas button.onclick car c'est generé en HTML
}); //Synthax ECMASCRIPT 

//creation d'un tableau de ma class mesfilms
let tabFilm = document.querySelectorAll('.mesfilm'); //tabFilm=tableau
tabFilm.forEach(function (element, index) { //ma boucle foreach en para element qui pointe tabfilm
                                        //index pointe index element 0 1 2 etc...
let bouton = document.createElement('button');//je crée un bouton
bouton.textContent = "Les Acteurs";//j'ajoute du text à mon bouton
bouton.onclick=function(){ //j'ajoute l'evenement "onclick" qui lance une fonction alert
                           // qui affichera les acteurs récupéré dans mon tableau film grâce à l'index
    alert(films[index].acteur);
}
element.appendChild(bouton); //j'ajoute le bouton à element qui est = à un film de tabfilm
});

//Manipulation du DOM 
document.getElementById('film').insertAdjacentHTML("beforebegin", '<h1>titre</h1>')
document.getElementById('film').insertAdjacentHTML('afterend', '<span id="copy">Copyright</span>')
document.getElementById('copy').insertAdjacentHTML('afterbegin', '<span>&copy;</span>')

//j'insere un @, le TEXT n'identifie pas les balises
document.getElementById('copy').insertAdjacentText('afterbegin', '@')
document.getElementById('copy').insertAdjacentText('afterend', ' Nom de la societe')

//attribution de l'id 'copy' qui est egal a 2019 en balise b = bold
//document.getElementById('copy').innerHTML="<b> 2019</b>"


//creation d'un id
/* var h2= document.createElement('h2')
h2.id= "mes-films";
h2.textContent= "mon h2";
document.querySelector('.englobe').insertAdjacentElement('afterbegin', 'h2') //prepend avant et appendChild après 
*/

//creation d'un bouton
var bouton = document.createElement('button');
bouton.textContent = "c'est un texte";
bouton.onclick = function () {
alert('ici un bouton');
};
document.getElementById('film').appendChild(bouton);

//j'applique du css dans l'html
var css = document.querySelector('h1')
css.style.color = "blue";

//mouse enter qui met rouge
var mouse = document.querySelector('h1')//je selectionne mon h1
mouse.onmouseenter = function () {
this.style.cursor = "grab";
this.style.color = "red";
};

//mouse sortie qui remet blue
mouse.onmouseleave = function () {
this.style.color = "blue";
};

//creation du sous titre
let soustitre = document.createElement("h2"); //je crée l'element h2
soustitre.textContent="C'est le deuxieme titre"; // j'ajoute du texte
document.querySelector('h1').insertAdjacentElement('afterend', soustitre)
//je selectionne h1 et je lui insert un element apres le titre ma variable soustitre

//mouse enter qui met rouge
var mouse2 = document.querySelector('h2') //je selectionne mon h2
mouse.style.color ="red";
mouse2.onmouseenter = function () {
this.style.cursor = "grab";
this.style.color = "green";
};

//mouse2 sortie qui remet blue
mouse2.onmouseleave = function () {
this.style.color = "red";
};






/* function element(args){ //je place en argument args
var elLi = document.createElement('div');
elLi.classList.add('film');
elLi.appendChild(addAttr(args.titre));
elLi.appendChild(addAttr(args.realisateur));
elLi.appendChild(addAttr(args.dateDeSortie));
elLi.appendChild(addAttr(args.synopsis));
elLi.appendChild(addAttr(args.nbEntrees));
//var attr = document.createAttribute('onclick')
//elLi.setAttribute('onclick');
document.querySelector('.list-film').appendChild(elLi);
} */

/* function addAttr(p){
var parametre = document.createElement('div');
parametre.innerHTML +=p;
return parametre;
} */

/* for(film of films){
element(film); //argument film qui cherche mon tablea films
} */