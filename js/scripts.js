//Business Logic
var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  console.log("Hey this is the input: " + input);
  var sentenceArray = input.split(" ")
  var outputArray = [];
  sentenceArray.forEach(function(x) {
    console.log("For Each value:" + x)

  });
  return sentenceArray;
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
