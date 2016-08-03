// APP ACADEMY ROUND 2 PRACTICE PROBLEM #03

var vowels = ['a','e','i','o','u'];

// HELPER METHOD 1

var isVowel = function (letter) {
    if ( vowels.indexOf(letter) > -1 ) {
        return true;
    }
    return false;
};

// HELPER METHOD 2

var isOrderedVowelWord = function (word) {
    if ( typeof word !== 'string' ) {
      return ('ERROR');
    }
    var arr = word.split('');
    for ( var i = 0 ; i < arr.length ; i ++ ) {
        if ( isVowel(arr[i]) ) {
            for ( var j = i + 1 ; j < arr.length ; j ++ ) { // key point, j must be < arr.length!
                if ( isVowel(arr[j]) && vowels.indexOf(arr[j]) < vowels.indexOf(arr[i]) ) {
                    return false;
                }
            }
        }
    }
    return true;
};

var orderedVowels = function (string) {
    var newArr = [];
    var arr = string.split(' ');
    for ( var i = 0 ; i < arr.length ; i ++ ) {
      if ( isOrderedVowelWord(arr[i]) ) {
        newArr.push(arr[i]);
      }
    }
    newArr = newArr.join(' ');
    return newArr;
};

console.log(orderedVowels('this is a test of the ordered vowels system'));



// Took about 45 minutes. Ouch! - JJB