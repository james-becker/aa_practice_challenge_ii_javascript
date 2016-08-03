// # Write a function, `rec_intersection(rect1, rect2)` and returns the
// # intersection of the two.
// #
// # Rectangles are represented as a pair of coordinate-pairs: the
// # bottom-left and top-right coordinates (given in `[x, y]` notation).
// #
// # Hint: You can calculate the left-most x coordinate of the
// # intersection by taking the maximum of the left-most x coordinate of
// # each rectangle. Likewise, you can calculate the top-most y
// # coordinate of the intersection by taking the minimum of the top most
// # y coordinate of each rectangle.
// #
// # Difficulty: 4/5
var recIntersection = function (rect1, rect2) {
	
  //define rect1
	var rect1L = Math.min(rect1[0][0], rect1[1][0]);
	var rect1R = Math.max(rect1[0][0], rect1[1][0]);
	var rect1B = Math.min(rect1[0][1], rect1[1][1]);
	var rect1T = Math.max(rect1[0][1], rect1[1][1]);
  
  //define rect2
	var rect2L = Math.min(rect2[0][0], rect2[1][0]);
	var rect2R = Math.max(rect2[0][0], rect2[1][0]);
	var rect2B = Math.min(rect2[0][1], rect2[1][1]);
	var rect2T = Math.max(rect2[0][1], rect2[1][1]);
  
  //find intersection
	var minX = Math.max(rect1L, rect2L);
	var maxX = Math.min(rect1R, rect2R);
	var minY = Math.max(rect1B, rect2B);
	var maxY = Math.min(rect1T, rect2T);

  //format intersection
	var intersection = [[minX, minY],[maxX, maxY]];
  
  //if no intersection
  if ( rect1L > rect2R || 
       rect2L > rect1R ||
       rect1B > rect2T ||
       rect2B > rect1T ) {
    return 'nil';
  }

	return intersection;
};

console.log(recIntersection([[0, 0], [2, 1]], [[1, 0], [3, 1]])); // [[1, 0], [2, 1]]
console.log(recIntersection([[1, 1], [2, 2]], [[0, 0], [5, 5]])); // [[1, 1], [2, 2]]
console.log(recIntersection([[1, 1], [2, 2]], [[4, 4], [5, 5]])); // 'nil'
console.log(recIntersection([[1, 1], [5, 4]], [[2, 2], [3, 5]])); // [[2, 2], [3, 4]]


// Took about 35 minutes. Ouch! - JJB

// puts("\nTests for #rec_intersection")
// puts("===============================================")
//     puts "rec_intersection([[0, 0], [2, 1]], [[1, 0], [3, 1]]) == [[1, 0], [2, 1]]: "  + (rec_intersection([[0, 0], [2, 1]], [[1, 0], [3, 1]]) == [[1, 0], [2, 1]]).to_s
//     puts "rec_intersection([[1, 1], [2, 2]], [[0, 0], [5, 5]]) == [[1, 1], [2, 2]]: "  + (rec_intersection([[1, 1], [2, 2]], [[0, 0], [5, 5]]) == [[1, 1], [2, 2]]).to_s
//     puts "rec_intersection([[1, 1], [2, 2]], [[4, 4], [5, 5]]) == nil: "  + (rec_intersection([[1, 1], [2, 2]], [[4, 4], [5, 5]]) == nil).to_s
//     puts "rec_intersection([[1, 1], [5, 4]], [[2, 2], [3, 5]]) == [[2, 2], [3, 4]]: "  + (rec_intersection([[1, 1], [5, 4]], [[2, 2], [3, 5]]) == [[2, 2], [3, 4]]).to_s
// puts("===============================================")