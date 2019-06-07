//function anonyme pour que le code ne vive que dans se bloc d'element
(function () {


    /**
     * function qui prend en parametre mon url et une function nommé complete avec un parametre qui contient les informations data
     * je traite le cas d'erreur
     * @param {*} url 
     * @param {*} complete 
     */
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
    let i = 0;
    let select = document.querySelector("select");
    request({
        url: "client.json",
        complete: function (r) {
            r.client.forEach(element => {
                let option = document.createElement('option');
                option.textContent = element.nom;
                option.setAttribute("value", i);
                select.appendChild(option);
                i++

            });
        }
    });

    let ul = document.createElement('ul');
    ul.className = 'list-group';

    let article = document.createElement('article');
    article.className = 'mt-4 text-center col-sm-12';

    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    h1.className = 'text-capitalize';
    h2.className = 'text-capitalize';



    document.querySelector("form").appendChild(article);

    select.onclick = function () {
        request({
            url: "client.json",
            complete: function (r) {
                ul.innerHTML = ""; //reset sinon ça répéte
                article.innerHTML = "";//reset article, obligé de tout avoir en dynamique
                h1.textContent = r.client[select.value].nom;
                /* document.querySelector("article h2").textContent = r.client[select.value].prenom; */
                h2.textContent = r.client[select.value].prenom;
                
                let age = document.createElement('li');
                age.textContent = `Age: ${r.client[select.value].age}`;
                age.className = 'list-group-item list-group-item-action list-group-item-primary';
                
                let profession = document.createElement('li');
                profession.textContent = `Profession: ${r.client[select.value].profession}`;
                profession.className = 'list-group-item list-group-item-action list-group-item-primary';
                
                let email = document.createElement('li');
                email.textContent = `Email: ${r.client[select.value].email}`;
                email.className = 'list-group-item list-group-item-action list-group-item-primary';

                article.appendChild(h1);
                article.appendChild(h2);
                ul.appendChild(email);
                ul.appendChild(profession);
                ul.appendChild(age);
                article.appendChild(ul);

            }
        })
    }
})()