 class Chrono {
    constructor() {
        this.currenTime = 0;
        this.isPause = false;
        this.interval = false;
        this.dAffichage = document.querySelector('.affichage');

    }

    start() {
        this.isPause = false; //start annule la pause
        if (this.interval === false) { //si interval est egal à false, le currenTime n'est pas lancé
       // var $this = this;
            this.interval = window.setInterval(function () {
                if (!this.isPause) {
                    this.currenTime++; 
                    //console.log(this.currenTime);
                    this.dAffichage.textContent = this.currenTime;
                   
                }
            }.bind(this), 1000);
        }
    }
    


    pause() {
        this.isPause = !this.isPause; //me permet de le mettre à son contraire et de relancé le currenTime avec le button pause
    }


    stop() {
        clearInterval(this.interval);
        this.interval = false;
        this.currenTime = 0;
        this.dAffichage.textContent = 0;
    }

} 




//pas compris l'exo, ceci est du prototypage et pas de la poo
/* var Chrono = function() {

        var currenTime = 0;
        var isPause = false;
        var interval = false;
        var dAffichage = document.querySelector('.affichage');

    

  this.start = function() {
        isPause = false; //start annule la pause
        if (interval === false) { //si interval est egal à false, le currenTime n'est pas lancé
            interval = window.setInterval(function () {
                if (!isPause) {
                    currenTime++; 
                    //console.log(currenTime);
                    dAffichage.textContent = currenTime;
                   
                }
            }, 1000);
        }
    };


    this.pause = function() {
        isPause = !isPause; //me permet de le mettre à son contraire et de relancé le currenTime avec le button pause
    };


    this.stop = function() {
        clearInterval(interval);
        interval = false;
        currenTime = 0;
        dAffichage.textContent = 0;
    };

}; */