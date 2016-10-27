/*
	Data Structures in TypeScript

	To Compile:
		tsc structures.ts
		(optionally: tsc structures.ts --noImplicitAny)
	To run:
		node structures.js

*/

// Basic wrapper for a primitive
class Item {
	constructor(
		public value: number | string | boolean
	) {}
}

function assert(val1: any, val2: any, message: string) {
	if (val1 !== val2) {
		console.log("Stack Assertion Failed: ", message);
		console.log(val1, "does not equal", val2);
	}
}

// 1. Stack

/*
 * A stack is a LIFO (Last In First Out) data structure. We use a stack when we
 * need to keep track of data that is nested, or when we need to make sure that
 * we solve all the sub-problems before solving a main problem. JavaScript uses
 * a stack to keep track of our function calls.
 */

class Stack {
 	// set up our storage, and keep it from prying eyes
	private storage: Item[];

	constructor() {
 		// initialize our storage so that it actually is an array.
		this.storage = [];
	}

	addItem(i: Item): void {
 		// void means that this function doesn't return anything.
 		// to add an item, push that item onto the end of the array.
		this.storage.push(i);
	}

	getLastItem(): Item {
 		// todo: remove and return the last item on the storage
		return this.storage.pop();
	
	}

	peekLastItem(): Item {
 		// todo: return a reference to the last item in storage without removing
		// return this.storage.slice(-1)[0];
		return this.storage[this.storage.length - 1];
	}

	isEmpty(): boolean {
 		// todo: return true if storage is empty, false otherwise
		
		if (this.storage.length === 0) {
			return true;
 		// return !this.storage.length
		}	else {
			return false;
	}
	}
}


let st: Stack = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");

st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");

let i: Item = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");

let i2: Item = st.getLastItem();
assert(i2.value, 3, "Stack returns last item on getLastItem");
assert(st.isEmpty(), true, "Stack is empty after popping last item");


// 2. Queue

/*
 * A queue is a FIFO (First In First Out) data structure. We use a queue when we
 * want to handle things in the order they are recieved. JavaScript uses a queue
 * to handle asynch functions in the order that they fire.
 */

 // Write, from scratch, an implementation of a Queue, and at least one test for
 // each method on the Queue.

class Item2 {
	constructor(
		public value: number | string | boolean
	) {}
}

function assert2(val3: any, val4: any, message: string) {
	if (val3 !== val4) {
		console.log("Queue Assertion Failed: ", message);
		console.log(val3, "does not equal", val4);
	}
}

class Queue {
	private storage: Item2[];

	constructor() {
		this.storage = [];
	}

	addItem(j: Item2): void {
		this.storage.push(j);
	}

	getFirstItem(): Item2 {
		return this.storage.shift();
	}

	peekFirstItem(): Item2 {
		return this.storage[0];
	}

	isEmpty(): boolean {
		if (this.storage.length === 0) {
			return true;
		}	else {
			return false;
		}	
	}
}

let qu: Queue = new Queue();
assert2(qu.isEmpty(), true, "Queue is empty on creation");

qu.addItem(new Item(8));
assert2(qu.isEmpty(), false, "Queue is not empty after one item added");

let j: Item2 = qu.peekFirstItem();
assert2(j.value, 8, "Peeking last item gets us the last item");
assert2(qu.isEmpty(), false, "Stack is not emptied by peeking");

let j2: Item2 = qu.getFirstItem();
assert2(j2.value, 8, "Stack returns last item on getLastItem");
assert2(qu.isEmpty(), true, "Stack is empty after popping last item");




 // 3. Pick a Data Structure

 /* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
  * and implement it in
  * TypeScript. Be sure to include tests! Make sure to choose something that
  * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
  * if you need help :)
  */


class PriorityItem {
	constructor(
		public value: number | string | boolean,
		public priority: number
	) {}
}

function assert3(val5: any, val6: any, message: string) {
	if (val5 !== val6) {
		console.log("Priority Queue Assertion Failed: ", message);
		console.log(val5, "does not equal", val6);
	}
}

class PriorityQueue {
	private storage: PriorityItem[];
	constructor() {
		this.storage = [];
	}

	addPriorityItem(k: PriorityItem): void {
		// for (let m = 0; m < this.storage.length; m++) {
		// 	if (this.storage[m].priority > k.priority ) {
		// 			this.storage.unshift(k);
		// 			return; 	
		// 	} else {
		// 		this.storage.splice(m, 0, k);
		// 	}
		// }

		this.storage.push(k);
		this.storage.sort(function(a, b){
			return a.priority - b.priority;
		});
	}

	getFirstPriorityItem(): PriorityItem {
		return this.storage.shift();

	}

	peekFirstPriorityItem(): PriorityItem {
		return this.storage[0];
	}

	isEmpty(): boolean {
		if (this.storage.length === 0) {
			return true; 		
		}	else {
			return false;
		}
	}
}

let pqu: PriorityQueue = new PriorityQueue();
assert3(pqu.isEmpty(), true, "PriorityQueue is empty on creation");

pqu.addPriorityItem(new PriorityItem("blech", 5));
assert3(pqu.isEmpty(), false, "PriorityQueue is not empty after one item added");

pqu.addPriorityItem(new PriorityItem("oooff", 1));
assert3(pqu.isEmpty(), false, "PriorityQueue is not empty after one item added");

pqu.addPriorityItem(new PriorityItem("garsh", 3));
assert3(pqu.isEmpty(), false, "PriorityQueue is not empty after one item added");

let k: PriorityItem = pqu.peekFirstPriorityItem();

assert3(k.value, "oooff", "Peek First Priority Item Didn't Work!");
assert3(pqu.isEmpty(), false, "PriorityQueue is not emptied by peeking");


// console.log(k);

// assert3(k.value, "oooff", "Peek First Priority first item gets us the first item");
// assert3(pqu.isEmpty(), false, "PriorityQueue is not emptied by peeking");


// let k2: PriorityItem = pqu.getFirstPriorityItem();
// assert3(k2.value, "oooff", "Get First Priority Item returns last item on getLastItem");
// assert3(pqu.isEmpty(), true, "PriorityQueue is empty after popping last item");














