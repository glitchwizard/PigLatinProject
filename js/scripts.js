//Business Logic
var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  var sentenceArray = input.split(" ")
  var outputArray = [];
  var vowelCountPlaceholder = 0;

    sentenceArray.forEach(function(x) {

      vowels.forEach(function(y){
            if ( x.indexOf(y) > 0) {
                if (vowelCountPlaceholder < 1) {
                  var intermediate = [];
                  intermediate = x.split('');
                  for(var j = 0; j < x.indexOf(y); j++){
                    intermediate.push(intermediate.splice(0, 1)[0]);
                  }
                  intermediate.push("ay")
                  outputArray.push(intermediate.join(""));
                  vowelCountPlaceholder++;
                }
            } else if (x.indexOf(y) === 0) {
                  if (vowelCountPlaceholder < 1) {
                  var intermediate = [];
                  intermediate.push(x);
                  intermediate.push("way");
                  outputArray.push (intermediate.join(""));
                  vowelCountPlaceholder++;
                }
              }
      });
      vowelCountPlaceholder =0;
    });
    console.log("This is outputArray: " + outputArray.join(" "));
    return outputArray.join(" ");
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
