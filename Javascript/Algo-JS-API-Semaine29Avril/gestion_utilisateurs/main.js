function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

(function () {
    //me permet d'attribué l'attribut requiered à chaque input (tableau)
    //sauf l'id checkbox
    document.querySelectorAll('input:not(#checkbox)').forEach(function (e) {
        e.setAttribute('required', 'required');

    });
    //mon tableau d'objet initilisé
    let villes = {};
    button = document.querySelector('.button');
    let input_city = document.querySelector('#city');
    let data_city = document.querySelector('#citylist');

    //function qui à l'evenement de la monté de la touche lance la requête sur l'api
    input_city.addEventListener('keyup', function () {
        input_val = this.value;
        if (input_val.length >= 2) {
            auto_complete(input_val);

        }

    })
    //requêtes fetch
    function request(datas) {
        fetch(datas.url || "")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(result => {
                datas.complete && datas.complete(result);
            })
    }

    /**
     * function qui prend en parametre name qui sera le parametre pour les villes
     * dedans il y a la function request qui lance la requêtes avec l'objet datas
     * puis je met mon result dans un tableau d'objet qui est villes
     * @param {*} mon 
     */
    function auto_complete(name) {
        request({
            url: `https://geo.api.gouv.fr/communes?nom=${name}&fields=code&format=json&geometry=centre`,
            complete: function (r) {

                villes = r.slice(0, 5);
                data_city.innerHTML = "";
                //je le met dans un tableau d'objet et je slice(method pour les tableaux) le tableau r et stock que 5 resultats
                //pour évité mon ancien if(i<5) et mon auto incrémentation pour limité le nbr de datas 
                console.log(villes);
                villes.forEach(element => {
                    //j'avais fais mon foreach dans et ma manip du dom dans mon evenement mais j'avais un probleme sur l'auto complétion
                    //il essayé de manipulé le dom sans avoir les datas de la requête de l'api
                    //je suis obligé de passé la manipulation de dom dans la requête car il n'attendais pas la réponse du serveur.

                    let option = document.createElement('option');
                    option.textContent = `${element.nom} (${element.code.substr(0,2)})`;
                    console.log(element.nom);
                    data_city.appendChild(option);


                });
            }
        });
    }


})()