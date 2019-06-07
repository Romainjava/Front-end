let apikey = "&APPID=4fb39035bae153492269c922e161d6d9&lang=fr";

async function request_meteo(lat, lng) { //je rend ma function asynchrone
    let url = "http://api.openweathermap.org/data/2.5/"
    url += `weather?lat=${lat}&lon=${lng}`;
    url += apikey;

    const response = await fetch(url); //je dis au fetch d'attendre la reponse de l'api     
    const json = await response.json();
    return json;
}

function meteo(lat, lng) {
    request_meteo(lat, lng).then((result) => {
        let e = new L.Marker([lat, lng], {
            icon: icon,
            /* draggable: true */
        }).addTo(macarte).bindPopup(result.weather[0].description);
    });
};

