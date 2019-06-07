/**
 * function pour dire que quand le document est ready, il m'execute ce qu'il contient
 */
$(function () {
    //je selectionne l'attribut type et son type button et l'englobe dans un objet jquery
    //ici cela ma permis de voir comment attraper un attribut grace au []
    let buttons = $('[type="button"]');
    // console.log(buttons)

    //je detache l'objet en nombre d'objet de la longueur necessaire grace au forvar
    for (let index = 0; index < buttons.length; index++) {
        button = $(buttons[index]);
        button_color = button.attr("data-color"); //je recupere l'attribut data color pour l'appliquer au css
        //console.log(button_color);

        button.css("background", button_color);
    }

    let checked = $('[type="checkbox"]')
    // console.log(checked)
    $(buttons).on('click', function () {
        let ischeckeck = checked.prop('checked')
        // console.log(ischeckeck)
        //permet de regarder dynamiquement avec la methode prop() au moment du check si c'est bien coché 
        //ou non, renvoie true quand checked, false à l'inverse.
        // let ischeckeck = checked.attr('checked') à l'inverse le fait au chargement de la page donc
        //me renvoie undefinied quand c'est uncheck et passe jamais en true pour se cas précis

        let color = $(this).attr('data-color');

        if (ischeckeck) {
            $('section').css('color', color);
        } else {
            $('body').css('background', color);
        }




    })




})