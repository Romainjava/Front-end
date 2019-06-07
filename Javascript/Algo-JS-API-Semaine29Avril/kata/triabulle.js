/* 
    Créez une fonction diffBig2() telle que : diffBig2([10, 5, 2]) = 10-5 = 5
    La fonction, en partant d'une liste de nombres, renvoie la différence entre les deux plus grands.
    Faites-le sans utiliser sort().
 */


/**
 * tri a bulle
 * @param {tableau*} tab 
 */
function diffBig2(tab) {

    for (let index = 0; index < tab.length; index++) {
        var indice_2 = index + 1;
        while (tab[index] < tab[indice_2]) {
            temp = tab[index];
            tab[index] = tab[indice_2];
            tab[indice_2] = temp;
            indice_2++;
        }
    }
    return tab;
}

function diffBig(numbers) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > a) {
            b = a;
            a = numbers[i]
        } else if (numbers[i] > b) {
            b = numbers[i];
        }

    }
    console.log(a-b);
}

diffBig([10,5,7,2]);
//console.log(diffBig2([10, 5, 2, 8, 9]));
