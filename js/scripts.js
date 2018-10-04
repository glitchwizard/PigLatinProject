//Business Logic
var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  console.log("Hey this is the input: " + input);
  var sentenceArray = input.split(" ")
  var outputArray = [];
  sentenceArray.forEach(function(x) {

    console.log("");
    console.log("----------------");
    console.log("ForEach value of X: " + x)

    vowels.forEach(function(y){
      lowestVowel = 0;
      if ( x.indexOf(y) > 0) {

        //if (lowestVowel == 0) {

          lowestVowel += 1;
          console.log("forEach value of Y: " + y);

          var intermediate = [];
          intermediate = x.split('');
          var firstConsonants = [];

          console.log("this is the value of x.indexOf(y): " + x.indexOf(y));

          for (var i = 0; i < x.indexOf(y); i++) {

            console.log("Here's the value of i: " + i);
            firstConsonants.push(intermediate[i]);
            console.log("This is firstConsonants: " + firstConsonants);


            };
          console.log("This is the value of 'intermediate' array: " + intermediate);
          intermediate.push(intermediate.splice(0, 1)[0]);
          intermediate.push("ay")
          console.log("This is the value of 'intermediate' array after the switch: " + intermediate)
          console.log("This is the value of 'intermediate' array after the switch, and joined: " + intermediate.join(""))

        } //else {
            //lowestVowel == 0;
            //}
        /*
      console.log("");
      console.log("this is the vowel I'm checking: " + y)
      console.log("This is the index of a vowel for this iteration: " + x.indexOf(y));
      console.log("");*/
      });
      ;console.log("^^^^^^^^^^^^^^");
      console.log("");
    //var firstVowel = x.indexOf("a")
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
