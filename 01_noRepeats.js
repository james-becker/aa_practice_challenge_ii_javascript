// # Write a function, `no_repeats(year_start, year_end)`, which takes a
// # range of years and outputs those years which do not have any
// # repeated digits.
// #
// # You should probably write a helper function, `no_repeat?(year)` which
// # returns true/false if a single year doesn't have a repeat.
// #
// # Difficulty: 1/5


var noRepeatYear = function (year) {
  year = year.toString();
	for ( var i = 0 ; i < year.length ; i ++ ) {
		for ( var j = i + 1 ; j < year.length ; j ++ ) {
			if ( year.charAt(i) === year.charAt(j) ) {
				return false;
			}
		}
	}
	return true;
};

console.log( noRepeatYear(1988) ); // false

var noRepeats = function (yearStart, yearEnd) {
	var arr = [];
	for ( var i = yearStart ; i <= yearEnd ; i ++ ) {
		if ( noRepeatYear(i) ) { arr.push(i); }
	}
	return arr;
};

console.log(noRepeats(1980, 1987) );



// Took about 40 minutes. Ouch. - JJB
