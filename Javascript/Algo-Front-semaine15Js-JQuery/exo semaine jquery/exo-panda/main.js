$('button').on('click', function () {
    let type = $(this).attr('data-type')
    let tendance = $(this).attr('data-tendance')
    alert("son type est "+type+" et sa tendance est"+ tendance);
})