var morseEncode = function (string) {
  string = string.toLowerCase();
	var array = [];
	var codeHash = {
		a: '.-',
		b: '-...',
		c: '-.-.',
		d: '-..',
		e: '.',
		f: '..-.',
		g: '--.',
		h: '....',
		i: '..',
		j: '.---',
		k: '-.-',
		l: '.-..',
		m: '--',
		n: '-.',
		o: '---',
		p: '.--.',
		q: '--.-',
		r: '.-.',
		s: '...',
		t: '-',
		u: '..-',
		v: '...-',
		w: '.--',
		x: '-..-',
		y: '-.--',
		z: '--..'
	};
	var morseEncodeWord = function (word) {
		word = word.split('');
		for ( i = 0 ; i < word.length ; i ++ ) {
			word.splice(i, 1, codeHash[word[i]]);
		}
		word = word.join(' ');
		return word;
	};
	array = string.split(' ');
	array.forEach( function (element, i) {
		array[i] = morseEncodeWord(element);//morseEncodeWord(array[i])
	});
	array = array.join('  ');
	return array;
};



// Took about 34 minutes. - JJB