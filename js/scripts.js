$(document).ready(function() {
  $("form#wine").submit(function(event) {

    var color = $("select#color").val();
    var country = $("select#country").val();
    var body = $("select#body").val();
    var attribute = $("select#attribute").val();
    var food = $("select#food").val();

    if (color === "Red") {
      $("#red").show();
    } else if (color === "White") {
      $("#white").show();
    } else {
      $("#rose").show();
    }

    event.preventDefault();
  });
});
