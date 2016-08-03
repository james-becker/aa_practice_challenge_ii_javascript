// # Write a function `bubble_sort(arr)` which will sort an array of
// # integers using the "bubble sort"
// # methodology. (http://en.wikipedia.org/wiki/Bubble_sort)
// #
// # Difficulty: 3/5

var bubbleSort = function (arr) {
	for ( i = 0 ; i < arr.length ; i ++ ) {
		if (arr[i+1] < arr[i]) {
			var temp = arr[i];
			arr.splice(  i  , 1 , arr[i+1] );
			arr.splice( i+1 , 1 ,   temp   );
			bubbleSort(arr);
		}
	}
	return arr;
};

console.log(bubbleSort([5, 6, 5, 1, 152, 153, 1442]));

// Took about 6 minutes. - JJB

// puts("\nTests for #bubble_sort")
// puts("===============================================")
//     puts "bubble_sort([]) == []: "  + (bubble_sort([]) == []).to_s
//     puts "bubble_sort([1]) == [1]: "  + (bubble_sort([1]) == [1]).to_s
//     puts "bubble_sort([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]: "  + (bubble_sort([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]).to_s
// puts("===============================================")