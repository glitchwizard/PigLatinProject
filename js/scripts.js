//Business Logic
var pigLatin = function(input) {
  console.log("This is business logic starting");
  
  var vowels = ["a","e","i","o","u","A","E","I","O","U"] // here's the vowels we want to search against
  var sentenceArray = input.split(" ") // take input and split it into an array of words
  var outputArray = []; // creating the output array early, which will be turned into a sentance
  var vowelCountPlaceholder = 0; // this is a counter to that will add one if we've found a vowel at all, then be used to terminate a loop, because some words have multiple vowels
  sentenceArray.forEach(function(x) {
  
    var wordAsLetters = x.split("");
    var vowelCount = 0;
    wordAsLetters.forEach(function (y) {
        vowels.forEach(function(z) {

          if (x.indexOf(z) > 0 && z === y && vowelCount <= 0) {

            if (/qu/.test(x) === false ) {
              for (var j = 0; j < x.indexOf(z) && vowelCount <= x.indexOf(z); j++) {
                wordAsLetters.push(wordAsLetters.splice(0, 1)[0]);
                vowelCount++;
              }
            } else if (/qu/.test(x) === true) {
              for (var j = 0; j <= x.indexOf(z) && vowelCount <= 1; j++) {
                wordAsLetters.push(wordAsLetters.splice(0, 1)[0]);
                vowelCount++;
              }
            }
            wordAsLetters.push("ay");
            outputArray.push(wordAsLetters.join(''));

          } else if (y.indexOf(z) === 0 && z === y && vowelCount <= 0) {
            wordAsLetters.push("way");
            outputArray.push(wordAsLetters.join(''));
            vowelCount++;

          } else if (typeof x == "number") {
            alert(" Please enter a string, not numbers");
          }
        });
      });
    });

    var output = outputArray.join(" ").toLowerCase();
    output = output.charAt(0).toUpperCase() + output.substr(1);
    return output;
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
