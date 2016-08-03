var nearestLarger = function (arr, idx) {
	var diff = 1;
	while (true) {
		left = idx - diff;
		right = idx + diff;

		if (left >= 0 && arr[left] > arr[idx]) {
			return left;
		} else if (right < arr.length && arr[right] > arr[idx]) {
			return right;
		} else if (left < 0 && right >= arr.length) {
			return 'nil'
		};
		diff += 1;
	}
}

// This is the only a/A practice problem I couldn't solve without looking at the solution. What I had going was embarrassingly overcomplicated. - JJB