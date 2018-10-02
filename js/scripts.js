//Business Logic
var pigLatin = function(input) {
  console.log("Hey this is the input: " + input);
  return input;
};

//jquery user interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(){
    event.preventDefault();
    var pigLatinInput = $("input#pig-latin").val();
    var result = pigLatin(pigLatinInput);

    $("#output").text(result);
    $("#result").show(result);
  });
});
