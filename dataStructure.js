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
