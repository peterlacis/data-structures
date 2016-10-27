/*
    Data Structures in TypeScript

    To Compile:
        tsc structures.ts
        (optionally: tsc structures.ts --noImplicitAny)
    To run:
        node structures.js

*/
// Basic wrapper for a primitive
var Item = (function () {
    function Item(value) {
        this.value = value;
    }
    return Item;
}());
function assert(val1, val2, message) {
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
var Stack = (function () {
    function Stack() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Stack.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Stack.prototype.getLastItem = function () {
        // todo: remove and return the last item on the storage
        return this.storage.pop();
    };
    Stack.prototype.peekLastItem = function () {
        // todo: return a reference to the last item in storage without removing
        // return this.storage.slice(-1)[0];
        return this.storage[this.storage.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Stack;
}());
var st = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");
st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");
var i = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");
var i2 = st.getLastItem();
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
var Item2 = (function () {
    function Item2(value) {
        this.value = value;
    }
    return Item2;
}());
function assert2(val3, val4, message) {
    if (val3 !== val4) {
        console.log("Queue Assertion Failed: ", message);
        console.log(val3, "does not equal", val4);
    }
}
var Queue = (function () {
    function Queue() {
        this.storage = [];
    }
    Queue.prototype.addItem = function (j) {
        this.storage.push(j);
    };
    Queue.prototype.getFirstItem = function () {
        return this.storage.shift();
    };
    Queue.prototype.peekFirstItem = function () {
        return this.storage[0];
    };
    Queue.prototype.isEmpty = function () {
        if (this.storage.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Queue;
}());
var qu = new Queue();
assert2(qu.isEmpty(), true, "Queue is empty on creation");
qu.addItem(new Item(8));
assert2(qu.isEmpty(), false, "Queue is not empty after one item added");
var j = qu.peekFirstItem();
assert2(j.value, 8, "Peeking last item gets us the last item");
assert2(qu.isEmpty(), false, "Stack is not emptied by peeking");
var j2 = qu.getFirstItem();
assert2(j2.value, 8, "Stack returns last item on getLastItem");
assert2(qu.isEmpty(), true, "Stack is empty after popping last item");
// 3. Pick a Data Structure
/* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
 * and implement it in
 * TypeScript. Be sure to include tests! Make sure to choose something that
 * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
 * if you need help :)
 */
var PriorityItem = (function () {
    function PriorityItem(value, priority) {
        this.value = value;
        this.priority = priority;
    }
    return PriorityItem;
}());
function assert3(val5, val6, message) {
    if (val5 !== val6) {
        console.log("Priority Queue Assertion Failed: ", message);
        console.log(val5, "does not equal", val6);
    }
}
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.storage = [];
    }
    PriorityQueue.prototype.addPriorityItem = function (k) {
        // for (let m = 0; m < this.storage.length; m++) {
        // 	if (this.storage[m].priority > k.priority ) {
        // 			this.storage.unshift(k);
        // 			return; 	
        // 	} else {
        // 		this.storage.splice(m, 0, k);
        // 	}
        // }
        this.storage.push(k);
        this.storage.sort(function (a, b) {
            return a.priority - b.priority;
        });
    };
    PriorityQueue.prototype.getFirstPriorityItem = function () {
        return this.storage.shift();
    };
    PriorityQueue.prototype.peekFirstPriorityItem = function () {
        return this.storage[0];
    };
    PriorityQueue.prototype.isEmpty = function () {
        if (this.storage.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return PriorityQueue;
}());
var pqu = new PriorityQueue();
assert3(pqu.isEmpty(), true, "PriorityQueue is empty on creation");
pqu.addPriorityItem(new PriorityItem("blech", 5));
assert3(pqu.isEmpty(), false, "PriorityQueue is not empty after one item added");
pqu.addPriorityItem(new PriorityItem("oooff", 1));
assert3(pqu.isEmpty(), false, "PriorityQueue is not empty after one item added");
pqu.addPriorityItem(new PriorityItem("garsh", 3));
assert3(pqu.isEmpty(), false, "PriorityQueue is not empty after one item added");
var k = pqu.peekFirstPriorityItem();
assert3(k.value, "oooff", "Peek First Priority Item Didn't Work!");
assert3(pqu.isEmpty(), false, "PriorityQueue is not emptied by peeking");
// console.log(k);
// assert3(k.value, "oooff", "Peek First Priority first item gets us the first item");
// assert3(pqu.isEmpty(), false, "PriorityQueue is not emptied by peeking");
// let k2: PriorityItem = pqu.getFirstPriorityItem();
// assert3(k2.value, "oooff", "Get First Priority Item returns last item on getLastItem");
// assert3(pqu.isEmpty(), true, "PriorityQueue is empty after popping last item");
