// # Write a function, `letter_count(str)` that takes a string and
// # returns a hash mapping each letter to its frequency. Do not include
// # spaces.
// #
// # Difficulty: 1/5

var letterCount2 = function (str) {
  var freq = {};
  for ( var i = 0 ; i < str.length ; i ++ ) {
    var regex = new RegExp(str.charAt(i), 'gi');
    freq[str.charAt(i)] = (str.match(regex)||[]).length;
  }
  return freq;  
};

console.log(JSON.stringify(letterCount2('supercalifragilisticexpealodocious'), null, 4));




// Took about 6 minutes after I figured out how to use the RegExp constructor. - JJB

// puts("\nTests for #letter_count")
// puts("===============================================")
//     puts "letter_count(\"cat\") == {\"c\" => 1, \"a\" => 1, \"t\" => 1}: "  + (letter_count("cat") == {"c" => 1, "a" => 1, "t" => 1}).to_s
//     puts "letter_count(\"moon\") == {\"m\" => 1, \"o\" => 2,\"n\" => 1}: "  + (letter_count("moon") == {"m" => 1, "o" => 2,"n" => 1}).to_s
//     puts "letter_count(\"cats are fun\") == {\"a\" => 2, \"c\" => 1, \"e\"=> 1, \"f\" => 1, \"n\" => 1, \"r\" => 1, \"s\" => 1, \"t\" => 1, \"u\" => 1}: "  + (letter_count("cats are fun") == {"a" => 2, "c" => 1, "e"=> 1, "f" => 1, "n" => 1, "r" => 1, "s" => 1, "t" => 1, "u" => 1}).to_s
// puts("===============================================")