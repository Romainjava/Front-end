/* Consignes

Créez une classe Chrono avec :

    une méthode start()
    une méthode pause()
    une méthode stop()
    une propriété currentTime

Indices

* [setTimeout](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setTimeout)
* [setInterval](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers/setInterval)

Bonus

Mesurer le temps que met le chrono pour écouler 5 min. Même chose pour 10 min. Comment réduire l'écart entre le temps affiché et le temps réel? */

let dAffichage = document.querySelector('.affichage');
let bStart = document.querySelector('#start');
let bStop = document.querySelector('#stop');
let bPause = document.querySelector('#pause');
/* let time = 0;
let isPause = false;
var interval = false; */
var chrono = new Chrono();


bStart.onclick = function () {
    chrono.start();
};

bStop.onclick = function () {
    chrono.stop();
};

bPause.onclick = function () {
    chrono.pause();
};



/* function start() {
    isPause = false; //start annule la pause
    if (interval === false) { //si interval est egal à false, le time n'est pas lancé
        interval = window.setInterval(function () {
            if (!isPause) {
                time++;
                dAffichage.textContent = time;
                //console.log(time);
            }
        }, 1000);
    }
}

function pause() {
    isPause = !isPause; //me permet de le mettre à son contraire et de relancé le time avec le button pause
}

function stop() {
    clearInterval(interval);
    interval = false;
    time = 0;
    dAffichage.textContent = 0;
} */