var itsArray = function(favFood, favDrink, favMovie, favCharacter) {

  var myArray = [favFood, favDrink, favMovie, favCharacter];
  alert(myArray); 

};



//frontend
$(document).ready(function() {
  $("#fav-things").submit(function(event) {
  var favFood = $("input#food").val();
  var favDrink = $("input#drink").val();
  var favMovie = $("input#movie").val();
  var favCharacter = $("input#character").val();
      itsArray(favFood,favDrink,favMovie,favCharacter);



  event.preventDefault();
});
});
