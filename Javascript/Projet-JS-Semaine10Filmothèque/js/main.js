/* console.log("hello world"); */

let titre="Un titre";
let auteur="Un auteur";
let dateDeSortie="Date de sortie";
let synopsis="synopsis";
let nombreEntree="nombres d'entrée";

//creation de notre objet film en json
/* var film = {
    titre:"un titre",
    auteur:"le réel",
    dateDeSortie:"Date de sortie",
    synopsis:" un synopsis",
    nombreEntree:"nombre d'entrée"
};
 */

//creation de l'objet avec un tableau
/* let filmtab = [
    titre="un titre",
    auteur="le réel",
    dateDeSortie="Date de sortie",
    synopsis=" un synopsis",
    nombreEntree="nombre d'entrée"
]; */

   //Un tableau d'objet, les objets étant les films
let films = [
    {
    titre:"un titre 1",
    auteur:"le réel",
    dateDeSortie:"Date de sortie",
    synopsis:" un synopsis",
    nombreEntree: 1500,  // un int
    },{
    titre:"un titre 2",
    auteur:"le réel 2",
    dateDeSortie:"Date de sortie 2",
    synopsis:" un synopsis 2",
    nombreEntree:2000,
    },{
    titre:"un titre 3",
    auteur:"le réel 3",
    dateDeSortie:"Date de sortie 3",
    synopsis:" un synopsis 3",
    nombreEntree:3000
    }
];
/* //for each pour afficher chaque elements du tableau
films.forEach(element => {
    console.log(element.titre);
    console.log(element.dateDeSortie);
    console.log(element.auteur);
    console.log(element.nombreEntree);
    console.log(element.synopsis);
}); */

//je cible l'index 0 de mon tableau et je lui attribut titre
/* console.log(films[0].titre) */

//for normal
 for (let index = 0; index < films.length; index++) {
    const element = films[index];
    console.log(element.titre);
    
} 
//forin key in object
/* for (const index in films) {
    if (films.hasOwnProperty(index)) {
        const element = films[index];
       console.log(index)
    }
} */
films[0].titre=" on renome le titre";
console.log(films[0].titre);

console.log("La Suite ");

//apprendre à filtrer un tableau
let filmfiltre = films.filter(films => films.nombreEntree > 1500);
console.log(filmfiltre);

console.log("Reducer en action");

//ma methode reduce qui prend en parametre a qui est accumulateur et b la currentvalue
var reduce = filmfiltre.reduce(function (a, b) {
  //return {nombreEntree: a.nombreEntree + b.nombreEntree}; // returns object avec propriété nombreEntree
  return a.nombreEntree + b.nombreEntree; //renvoie sans objet
})
//console.log(reduce.nombreEntree+ " est le nombre d'entrée vendu")
console.log(reduce+ " est le nombre d'entrée vendu");