//Business Logic
var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]
  var sentenceArray = input.split(" ")
  var outputArray = [];
  var vowelCountPlaceholder = 0;
    sentenceArray.forEach(function(x) {
      vowels.forEach(function(y){
        if ( x.indexOf(y) > 0 && /[aeiouAEIOU]/.test(x) === true ){
          if (vowelCountPlaceholder < 1) {
            var intermediate = [];
            intermediate = x.split('');
            intermediate.forEach(function(z) {
              console.log("here's the value of z: " + z);
              vowels.forEach(function(zz){
                console.log("here's the value of zz it's checking against: " + zz );
                if (vowelCountPlaceholder < 1) {
                  if (zz === z && /qu/.test(x) === false) {
                    for(var j = 1; j < x.indexOf(y); j++){
                      console.log("If this is true, splice! " + intermediate);
                      intermediate.push(intermediate.splice(0, 1)[0]);
                    }
                  } else if (zz === z && /qu/.test(x) === true){
                    for(var j = 1; j < x.indexOf(y)+1; j++){
                    console.log("If this is true, splice! " + intermediate);
                    intermediate.push(intermediate.splice(0, 1)[0]);
                    }
                    vowelCountPlaceholder++;
                  }
                }
              });
            });
            intermediate.push("ay")
            outputArray.push(intermediate.join(""));
            vowelCountPlaceholder++;
          }
        } else if (x.indexOf(y) === 0 && /qu/.test(x) === false) {
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
