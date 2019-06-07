/**
 * 
 * @param {function pour couleur*} input 
 */
function couleur_input(input) {
    return input;
}
/**
 * function qui crée ma div avec des dimension de 50 sur 50
 *  et lui ajoute des couleurs de l'input ou par defaut jaune
 */
$('.create').on('click', function () {
    let div = $('<div></div>')
    let couleur = $('input').val() /* || $('input').val("jaune"); */

    if (couleur == "") {
        $(div).addClass(couleur_input("jaune"))
    } else {
        $(div).addClass(couleur_input(couleur))
    }

    $('#cadre').append(div)
    $(div).css({
        width: '50px',
        height: '50px',
    })
})
    /**
     * fonction qui permet de supprimer les div par rapport à la valeur du input
     */
    $('.supprimer').on('click', function () {
        let supprimer = $('input').val();
        $('#cadre div').remove(`.${supprimer}`)
    })
    /**
     * fonction qui remove toutes les div contenu dans l'id cadre
     */
    $('.destroy').on('click', function () {
        $('#cadre div').remove()
    })
    /**
     * fonction qui ajoute du texte dans toutes les div
     */
    $('.write').on('click', function () {
        let present = $('input').val();
        $('#cadre div').html(`<p>${present}</p>`)
    })
    /**
     * fonction qui supprime la valeur de l'input ainsi que toutes les div de cadre
     */
    $('.clear').on('click', function () {
        $('input').val('');
        $('#cadre div').remove();

    })
    /**
     * fonction qui ajoute un effet de type shake qui prend ("effet", argument, time)
     */
    $('.shake').on('click', function () {
        $('#cadre div').effect("shake",{distance:5}, 2000);
    })
    /**
     * fonction qui permet d'ajouter un effect explode sur le container cadre
     * j'ai mis un 3eme argument .rouge car quand la page charge la class .rouge n'est pas load
     * je remove une fois l'effet fini de explode
     */
    $('#cadre').on('click',".rouge", function () {
        $(this).hide("explode",{pieces: 16 }, 2000, function() {
            $(this).remove();
        }) 
    })

    /**
     * function qui change le style de la classe .vert
     */
    $('#cadre').on('mouseover',".vert", function () {
        $(this).css({
            background: 'blue'
        })
    })
    /**
     * fonction qui ajoute un delay de 2sec sur le changement de css
     */
    $('#cadre').on('click',".jaune", function () {
        $(this).css('transition-delay', '2s').css('background','red');
    })
    /**
     * function qui au double click et au chargement des div, compte sur le double click l'attribut class
     * et le stock dans count ensuite je concatene le nombre de class sur la longueur
     * la function dialog doit se remplir dans une div vide pour l'affichage
     */
    $('#cadre').on('dblclick',"div", function() {
        var color = $(this).attr('class')
        var count = $("."+color).length
        $('#modal').dialog({
            modal: true,
            title: `Vous avez ${count} div de couleur ${color}`
        })
    })
