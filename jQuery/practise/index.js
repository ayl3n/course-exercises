/*

Access the element properties with dot notation, being able to modify,
add and delete them

Also, we are able to change text inside html elements

*/

$("h1").css("color", "red"); //manipulate elements properties

/*

*/

$("img").attr("src")

$("a").attr("href", "https://espanol.yahoo.com/");

$(document).keydown(function(event){
    $("h1").text(event.key);

})