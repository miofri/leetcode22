// solution is not optimal since I'm using my own class for LL, need to fix this later

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	insertLast(data) {
		if (this.head === null) {
			return (this.head = new Node(data, this.head));
		}
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = new Node(data);
	}
}

var mergeTwoLists = function (list1, list2) {
	if (list1 === null && list2 === null) {
		let ll = new LinkedList;
		return ll.head;
	}
	let array1 = [];

	while (list1 !== null && list1.val !== null) {
		array1.push(list1.val);
		if (!list1.next)
			break;
		list1 = list1.next;
	}

	while (list2 !== null && list2.val !== null) {
		array1.push(list2.val);
		if (!list2.next)
			break;
		list2 = list2.next;
	}

	array1.sort(function (a, b) {
		return a - b
	});

	const finalList = new LinkedList;
	for (let i = 0; i < array1.length; i++) {
		finalList.insertLast(array1[i]);
	}
	return finalList.head;
};
