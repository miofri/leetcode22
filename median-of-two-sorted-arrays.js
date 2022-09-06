var findMedianSortedArrays = function (nums1, nums2) {
	let combinedArray = nums1.concat(nums2)
	let len = combinedArray.length
	let result = 0

	combinedArray.sort(function (a, b) {
		return a - b;
	});

	if (len % 2 === 0) {
		let mid = len / 2
		result = (combinedArray[mid] + combinedArray[mid - 1]) / 2
		console.log(result)
		return result
	}
	else {
		result = combinedArray[Math.floor(combinedArray.length / 2)]
		return result
	}
};
