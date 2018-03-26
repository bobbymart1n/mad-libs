$(document).ready(function() {
  $("#formOne").submit(function(event){
    var blanks = ["input1", "input2", "input3", "input4", "input5"];

    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();
      $("." + blank).text(userInput);
    });

    $('#story').show();
    event.preventDefault();
  });
});
