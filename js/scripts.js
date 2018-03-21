$(document).ready(function() {
  $("#formOne").submit(function(event){
    var input1 = $('#input1').val();
    var input2 = $('#input2').val();
    var input3 = $('#input3').val();
    var input4 = $('#input4').val();
    var input5 = $('#input5').val();
    $('.person1').text(input1);
    $('.person2').text(input2);
    $('.animal').text(input3);
    $('.exclamation').text(input4);
    $('.verb').text(input5);

    $('#story').show();
    event.preventDefault();
  });
});
