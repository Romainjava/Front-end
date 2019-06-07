function addTask() {
    //creation element
    if ($('input').val() != "") {
        let task = `<li class="list-group-item">${$('input').val()}<i class="fas fa-trash m-1"></i><i class="fas fa-check m-1"></i> <i class="fas fa-edit m-1"></i></li>`;

        $('ul').append(task);
        $('input').val('');
    }
}

$("button").on('click', addTask);

//function qui permet de faire la touche entrée dans l'input pour rentré la valeur
$('input').keypress(function (e) {
    if ($('input').val() != "") {
        if (e.keyCode == 13) {
            addTask();
        }
    }
})
//function pour delete a partir du parent 
$('ul').on("click", ".fa-trash", function () {
    $(this).parent().remove();
})

$('ul').on("click", ".fa-edit", function () {
    $('#text_edit, #edit').remove(); //me permet d'évité le spam de creation du champ input juste en dessous
    //et permet de pas pas ouvrire deux input
    $(this).parent().append(`<input type='text' id='text_edit'/><button class="btn btn-dark" id='edit'>Modifier</button>`);
})