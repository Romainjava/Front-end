 function masquer(str) {
    var begin = str.substring(0, str.length -4);
    var end = str.slice(-4);
    var x = begin.replace(/./g, '#');
    x += end;
    return x;
}

console.log(masquer("bonjour à tous")); 


//Créez une fonction qui prend deux objets en entrée et écrit dans la console si leur type est identique ou pas.
//pareil(2, 3); // le type est le même
//pareil(2,"2"); // le type est différent
/*return de type ternaire avec un if et else if */
function pareil(entry1, entry2){
return (typeof entry1 === typeof entry2)?"le type est le même":(typeof entry1 != entry2)?"toto":"regis";
}

console.log(pareil(2,"2"));
console.log(pareil(2, 2.0));