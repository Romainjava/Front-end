let params = new URLSearchParams(document.location.search);
//document ca représente ta page
//location l'url
//search pointe sur ce qu'il y'a aprés le ?

let name = params.get("idDeFilm");
// je get l'id de la page api.js qui est `index2.html?idDeFilm=${element.id}`;

let root = 'https://image.tmdb.org/t/p/w500';
let apiKey = 'bbad9d275376358a8c117caf83f0cba0';
let urlused = `https://api.themoviedb.org/3/movie/${name}?api_key=` + apiKey + "&language=fr-FR";
//name = iDeFIlm  

//Une fonction qui return une requête ajax entiere donc qui return les data de success et donnée tierce
function ajax1() {
    return $.ajax({
        url: urlused,
        success: function (unFilm) {
            


        }
    });
};

function ajax2() {
    return $.ajax({
        url: `https://api.themoviedb.org/3/movie/${name}/credits?api_key=` + apiKey,
        success: function (acteur) {
            console.log(acteur);

        }
    })
};




function ajax3() {
return $.ajax({
    url: `https://api.themoviedb.org/3/movie/${name}/videos?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
    success: function (video) {
        
        
    }
});
};




//ceci me permet d'attendre que le code soit charger pour envoyé le code
//une fonction qui s'occupe de l'affichage grâce à .when  
//Quand les fonction qui contiennent les requêtes ajax sont effectué,
// le .done effectue la fonction d'affichage
//Les requêtes ajax renvoie un tableau de 3 elements, les DATA sont en index0 d'ou les args[0] dans la fonction
$.when(ajax1(), ajax2(), ajax3()).done(function (unFilm, acteur, video) { 

    console.log(unFilm[0])

    //affichage unFilm[0]
    let img = document.createElement('img');
    img.className = 'img-p2';
    img.src = root + unFilm[0].poster_path;

    let titre = document.createElement('h1');
    titre.className = 'titrep2';
    titre.textContent = unFilm[0].title;

    let syno = document.createElement('p');
    syno.className = "synopsis2";
    syno.textContent = unFilm[0].overview;

    document.querySelector('aside').appendChild(img);
    document.querySelector('#film').prepend(titre);

  

    //affichage acteur
    let madiv = document.createElement('div')
    madiv.className = 'madiv';
    

    acteur[0].cast.forEach(function (element, index) {
        if (index >= 0 && index <= 5) {

            let container = document.createElement('article');
            container.className = 'mes-articles';

            let imgActor = document.createElement('img');
            imgActor.className = "acteurs";
            imgActor.src = 'https://image.tmdb.org/t/p/w200' + element.profile_path;

            let nom = document.createElement('h2');
            nom.textContent = element.name;
            nom.className = "nom-acteur";

            container.appendChild(nom);
            container.appendChild(imgActor);
            madiv.appendChild(container);
           
        }
        document.querySelector('#film').appendChild(madiv);
    });
       
    let divActeur =  document.createElement('div') 
    let divIframe = document.createElement('div'); 
    let divdediv = document.createElement('div'); 
    let trailer = document.createElement('iframe');
    let divSynopsis = document.createElement('div')
    let divParentSyno = document.createElement('div')
    let lien = document.createElement('a');
    let bouton = document.createElement('button');


    //bouton pour page 1
    bouton.className="boutonp1"
    bouton.href=`index.html`;
    bouton.onclick="";
    bouton.textContent="Home";

    lien.href=`index.html`;
    lien.onclick="";


        //container de l'iframe
       divIframe.className ='trailer';
       divdediv.className ='theDiv';
        

        //trailer
        console.log("ICI VIDEO" + video[0].results.key);
        
        trailer.setAttribute('allowFullScreen', '');
        trailer.src = "https://www.youtube.com/embed/" + video[0].results[0].key;
        divIframe.appendChild(trailer);
        divdediv.appendChild(divIframe);
        document.querySelector(".titrep2").insertAdjacentElement("afterend", divdediv);
        

        //synopsis
      divSynopsis.className= "divSynopsis";
      divParentSyno.className= "divParentSyno";
      

        //div acteur
        divActeur.className="divActeur";


        divSynopsis.appendChild(syno);
        divParentSyno.appendChild(divSynopsis)
        divActeur.appendChild(madiv)
        divActeur.appendChild(divParentSyno);
        lien.appendChild(bouton);
        document.querySelector('#film').appendChild(divActeur);
        document.querySelector('.wrapper').appendChild(lien)
      

});