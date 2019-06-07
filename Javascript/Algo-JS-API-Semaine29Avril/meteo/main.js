// Nous initialisons une liste de marqueurs
var villes = {
    "gaumont": {
        "lat": 43.60439390000001,
        "lng": 3.915343900000039
    },
    "comedie": {
        "lat": 43.6084213,
        "lng": 3.879910699999982
    }
};

// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 43.60749367313742;
var lon = 3.880577087402344;
var macarte = null;
var markerClusters; // Servira à stocker les groupes de marqueurs
//var markerTab = [];
var i = localStorage.length;
// var i = O; Il me remplacer chaque nouvelle donnée car il avait 5 entrée dans le localstorage, et des qu'il depassé le 
//5 il recommencé à écrasé les données à partir du 0 jusqu'à 5
//dans la doc ils disent au lieu de mettre la clé i, de directement mettre localstorage.length et en +
//il s'incrémente tout seul (je ne l'ai pas fait pour resté frais dans mes exemples)

/**
 * function qui stringify et stock dans le local storage chaque valeurs de villes
 */
function stockCities() {
    for (const key in villes) {
        const valeur = villes[key];
        let str_lat_lng = JSON.stringify(valeur); // je recupére la valeur lat et lng et le stringify
        localStorage.setItem(key, str_lat_lng); // je stock dans le local storage la key et la valeur
    }
};

function findCities() {
    for (let index = 0; index < localStorage.length; index++) {
        let key_city = localStorage.key(index); // localstorage.key me permet de recuperer la key de l'indice index du localstorage (BDD)
        let strStorage = localStorage.getItem(key_city); //ceci prend la valeur qui correspond à la key
        //console.log(strStorage);
        let value_City = JSON.parse(strStorage); //ceci me permet convertir en objet 
        //console.log(key_city);
        //console.log(value_City);
        villes[key_city] = value_City;

    }
    console.log(villes);
}

// Fonction d'initialisation de la carte
function initMap() {
    var markers = []; // Nous initialisons la liste des marqueurs
    var iconBase = 'file:///home/simoccjavmonp12/Bureau/Semaine29Avril/meteo/icons/';
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    markerClusters = L.markerClusterGroup(); // Nous initialisons les groupes de marqueurs
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    // Nous ajoutons un marqueur
    var marker = L.marker([lat, lon]).addTo(macarte);

    //ajoute un marqueur
    macarte.on('click', function (e) {
        // console.log(e);
        // console.log(macarte);
        //  marker.removeFrom(macarte);
        marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(macarte);
        /*    markerTab[i] = {
               lat: e.latlng.lat,
               lng: e.latlng.lng

           } */
        villes[i] = e.latlng; //je stock mes coordonée dans mon jsoneeeee
        i++;
        stockCities();


        request_meteo(e.latlng.lat, e.latlng.lng).then((result) => {
            console.log(result);
            var iconcode = result.weather[0].icon;
            var iconeurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            var msg = `<p>${result.weather[0].description}</p>
            <div id="icon"><img id="wicon" src="${iconeurl}" alt="Weather icon"></div>`;
            var popup = L.popup()
            .setContent(msg);

            marker.bindPopup(popup).openPopup();
            
        });

        /*let mss = meteo(e.latlng.lat, e.latlng.lng);
        var popup = L.popup()
            .setContent(mss);
        marker.bindPopup(popup).openPopup();
        */


    })
    //me permet de remplir le json ville à partir du localstorage
    findCities();
    // Nous parcourons la liste des villes
    for (ville in villes) {
        // Nous définissons l'icône à utiliser pour le marqueur, sa taille affichée (iconSize), sa position (iconAnchor) et le décalage de son ancrage (popupAnchor)
        var myIcon = L.icon({
            iconUrl: iconBase + "autres.png",
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -76],
        });
        // icon: myIcon ajoute l'icon via la librairie, c'est un objet icon
        var marker = L.marker([villes[ville].lat, villes[ville].lng], {
            icon: myIcon
        }); // pas de addTo(macarte), l'affichage sera géré par la bibliothèque des clusters


        // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
        marker.bindPopup(ville);
        //   markerClusters.addLayer(marker); // Nous ajoutons le marqueur aux groupes
        //  markers.push(marker); // Nous ajoutons le marqueur à la liste des marqueurs
    }
    var group = new L.featureGroup(markers); // Nous créons le groupe des marqueurs pour adapter le zoom
    macarte.fitBounds(group.getBounds().pad(0.5)); // Nous demandons à ce que tous les marqueurs soient visibles, et ajoutons un padding (pad(0.5)) pour que les marqueurs ne soient pas coupés
    //macarte.addLayer(markerClusters);
}
window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};