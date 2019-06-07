let apiKey = 'bbad9d275376358a8c117caf83f0cba0';
let urlused = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + "&language=fr-FR";
let root = 'https://image.tmdb.org/t/p/w200'; //taille = w200

//document.querySelector('.film').appendChild(img);
//jquery method injection AJAX
$.ajax({
    url: urlused,
    success: function (result) {
        let array = result.results; //results correspond à l'objet qui contient mon tableau de l'api
        console.log(array[0]);
        array.forEach(function (element, index) {

            //créer une balise container
            let container = document.createElement('article'); //création d'un élément
            container.classList = "un-film"; //attribution d'une class

            // créer un  <p>
            let titre = document.createElement('p');
            titre.textContent = element.title;
            titre.className = "mes-titres";

            // créer un balise img
            let image = document.createElement('img');
            image.src = root + element.poster_path; //modification de la source de l'img
            image.className = "mes-images"

            let regis = document.createElement('div');
            regis.className = "imgP";



            // créer dans la balise p le synopsis
            let syno = document.createElement('p');
            syno.className = "synopsis";
            syno.textContent = element.overview; // je récupére l'attribut overview de mon element
            //et je le met dans le content de ma balise syno



            let lien = document.createElement('a');
            lien.className = "lien";
            lien.href=`index2.html?idDeFilm=${element.id}`; //idDeFilm variable dynamique
            lien.onclick="";




            container.appendChild(titre); //1er position
            container.appendChild(regis); //2eme position
            regis.appendChild(image); //3eme position
            regis.appendChild(syno);
            lien.appendChild(container);
            lien.appendChild(regis);
           
            document.querySelector('#film').appendChild(lien); //itération à chaque éléments 
            //mon container est l'enfant de l'id film et il englobe
        });
    }
});


