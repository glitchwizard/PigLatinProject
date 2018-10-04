//Business Logic
var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"] // here's the vowels we want to search against
  var sentenceArray = input.split(" ") // take input and split it into an array of words
  var outputArray = []; // creating the output array early, which will be turned into a sentance
  var vowelCountPlaceholder = 0; // this is a counter to that will add one if we've found a vowel at all, then be used to terminate a loop, because some words have multiple vowels
    sentenceArray.forEach(function(x) { // for each word in sentanceArray, do this thing
      vowels.forEach(function(y){ // for each vowel in each word, do this:
        if ( x.indexOf(y) > 0 && /[aeiouAEIOU]/.test(x) === true ){ // if there are vowels and they are not the first letter, do this:
          if (vowelCountPlaceholder < 1) { // if the letter being tested is not a vowel, do this:
            var intermediate = []; // create an intermediate array to turn the words into character arrays
            intermediate = x.split('');  // split the words into an array of character arrays
            intermediate.forEach(function(z) { // for each letter in the word, do this:
              console.log("here's the value of z: " + z); // log to see which letter we're checking:
              vowels.forEach(function(zz){ // check each letter against the vowels
                //console.log("here's the value of zz it's checking against: " + zz );
                if (vowelCountPlaceholder < 1) { // if this letter is not a vowel still, move forward (could probably improve this)
                  if (zz === z && /qu/.test(x) === false) { // if it is a vowel, and there's no QU, do this thing.
                    for(var j = 0; j < x.indexOf(y); j++){ // NOTE: This is my stopping point on work today, I'm going to pick this up later.
                      intermediate.push(intermediate.splice(0, 1)[0]);
                      console.log("If this is true, splice without QU! " + intermediate);
                      vowelCountPlaceholder++;
                    }
                  } else if (zz === z && /qu/.test(x) === true){
                    for(var j = 0; j < x.indexOf(y); j++){
                    intermediate.push(intermediate.splice(0, 1)[0]);
                    console.log("If this is true, splice with QU! " + intermediate);
                    vowelCountPlaceholder++;
                    }

                  }
                }
              });
            });
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
    var output = outputArray.join(" ").toString();
    console.log("This is output: " + output);
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
