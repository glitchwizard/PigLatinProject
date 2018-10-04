//Business Logic
var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  console.log("Hey this is the input: " + input);
  var sentenceArray = input.split(" ")
  var outputArray = [];
  var vowelCountPlaceholder = 0;


    console.log("This is where the if loop starts----");
    sentenceArray.forEach(function(x) {

      // console.log("");
      // console.log("---------------------------------------------------------------");
      // console.log("ForEach value of X: " + x)

      vowels.forEach(function(y){
          if (vowelCountPlaceholder < 1) {
        // console.log("");
        // console.log("this is the vowel I'm checking: " + y)
        // console.log("This is the index of a vowel for this iteration: " + x.indexOf(y));
        // console.log("");

            if ( x.indexOf(y) > 0) {
                // console.log("forEach value of Y: " + y);

                var intermediate = [];
                intermediate = x.split('');

                // console.log("this is the value of x.indexOf(y): " + x.indexOf(y));

                for (var i = 0; i < x.indexOf(y); i++) {
                  // console.log("Here's the value of i: " + i);
                  };

                // console.log("This is the value of 'intermediate' array: " + intermediate);

                intermediate.push(intermediate.splice(0, 1)[0]);
                intermediate.push("ay")

                // console.log("This is the value of 'intermediate' array after the switch: " + intermediate)
                // console.log("This is the value of 'intermediate' array after the switch, and joined: " + intermediate.join(""))
                outputArray.push(intermediate.join(""));

              } else if (x.indexOf(y) === 0){
                // console.log("This is a word starting with a vowel.");
                var intermediate = [];
                intermediate.push(x);
                intermediate.push("way");
                // console.log("This is intermediate as an array: " + intermediate);

                // console.log("this is the type of intermediate after the join: " + typeof intermediate);
                // console.log("This is intermediate after the push and join: " + intermediate.join(""));
                outputArray.push (intermediate.join(""));

              }
          console.log("This is vowelCountPlaceholder: " + vowelCountPlaceholder);
          vowelCountPlaceholder++;
          console.log("This is where the IF loop stops ---------- ");
        };
        vowelCountPlaceholder = 0;
        ;console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        console.log("");
      //var firstVowel = x.indexOf("a")
      });
      console.log("This is outputArray: " + outputArray.join(" "));

    return outputArray.join(" ");
  });
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
