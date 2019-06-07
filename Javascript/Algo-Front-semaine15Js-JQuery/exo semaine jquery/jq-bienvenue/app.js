/* console.log('have fun !');
var element = {}
var key = 0;
$('button').on('click', function () {
    $('input').each(function () {
            element[key] = ($(this).val())
          key++;   
        }),
        console.log(element)
        $('#username').text($('#first_name').val()+ " "+ $('#last_name').val())
        $('input').val('');
    
}) */

/**
 * fonction qui en amont met en clé de l'objet element la recuperation de
 * l'attribut 'name' dans l'html, puis sa valeur de l'input
 * j'incrémente ma var key pour chaque itération de la methode each
 * qui me servira pour mon for each par la suite et ressortir les element
 * de mon objet en concaténant dans ma string_hello
 */
var element = {}
var key = 0;
$('button').on('click', function () {
  $('input').each(function () {
    element[$(this).attr('name')] = ($(this).val())
    key++;
  });
  console.log(element);


  string_hello = "";
  for (var key in element) {
    string_hello += " "+ element[key];
  }

  $('#username').text(string_hello);
  $('input').val('');

});