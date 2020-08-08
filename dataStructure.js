// Queues from scatch.

class Queue {
    constructor(){
        this.data = []; a 
    }
    add(record) {
        this.data.unshift(record)
    }

    remove() {
        return this.data.pop()
    }
}

// STACK

// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }
    push(record) {
        this.data.push(record);
    }
    pop(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length - 1];
    }
}


// Linked List --> ordered of collection of data. 
const nodeOne = {
    data: 123 
};
const nodeTwo = {
    data: 456
}

nodeOne.next = nodeTwo;


// Singly Linked List --> 

class Node { // Declare a class Node 
    constructor(val) { // Declare a constructor --> which takes in a val.
        this.val = val; // Set val to val. 
        this.next = null; // Set next to null.
    }
}

/* INCORRECT WAY 

let first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('are');
first.next.next.next = new Node('you');

*/ 

// CORRECT WAY
// Declare a class Singly Linked List.

class SinglyLinkedList {
    // Don't initiailzie w/ any data. 
    constructor() { 
        // Takes a head, tail, and a length
        this.head = null; // Beginning of List
        this.tail = null; // End of List
        this.length = 0;  // Size of List
    }
    // PUSH method INPUT: a val 
    push(val){
        const newNode = val// Declare a variable newNode set to val
        // EDGE CASE 

        // IF there is no HEAD
        if(!head) {
            this.head = newNode; // Set head to newNode 
            this.tail = this.head; // Set tail to head
        } else { // ELSE 
            this.tail.next = newNode;// Set the tail w/ next property to the newNode
            this.tail = newNode; // Update tail to newNode
        }
        this.length++; // Increment the length property 
        return this;  // RETURN list w/ this 
    }
}