function minsToMidnight() {  /*j'instancie minsToMidnight */
  let now = new Date(); /*j'appel la date utc +0 */
  let then = new Date(now); /* une astuce trouvé sur internet*/
  then.setHours(24, 0, 0, 0); /* j'utilise l'astuce pour mettre l'horloge au début */
  return (then - now) / 6e4 + " il reste tant de mins avant minuit.";
} /* calcule avec une division 6e4 qui est une notation scientifique pour dire  6*10 puissance 4 (qui signifie 60k) */

console.log(minsToMidnight()); 

