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

// Declare a class instance Node 
class Node { 
    constructor (val) { // Declare a constructor function --> which takes in one property 
        this.val = val; 
        this.next = null 
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
    // Declare a constructor --> no properties
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    // Declare a push method --> will add a val to the link list. 
    push(val) {
        const newNode = new Node(val) // Delcare const variable newNode set to new Node w/ data passed in.
        if (!this.head) {  // IF there is no head 
            // NODE is empty
            this.head = newNode; // Set head to newNode
            this.tail = this.head; // Set tail to head 
        } else { // ELSE 
            // NODE exist
            this.tail.next = newNode; // Set the next tail property to the new Node. 
            this.tail = newNode; // Reassign the tail property to new Node. 
        }
        this.length++// INCREMENT length by 1
        return this; // RETURN the linked list --> this. 

    }
    // Define a function: pop()
    pop() {
        if (!this.head) { // IF there is no head property
            return null; 
        }
        let current = this.head; // Declare a variable current set to head
        let newTail = current; // Declare a variable newTail set to current 

         while (current.next) { // WHILE current has a next property 
             newTail = current; // Set newTail to current 
             current = current.next // Set current to current w/ next property 
         }
            this.tail = newTail// Set tail to newTail
            this.tail.next = null; // Set tail's next property to null
            this.length--;  // Decrement length by 1
            if (this.length === 0) {
                this.head = null;
                this.tail = null; 
            }
            return current; // RETURN current
    }  
}

const list = new SinglyLinkedList(); 

console.log(list.push('HELLO'));
console.log(list.push('GOODBYE'));
// console.log(list.pop());
// console.log('RESULT :', list);
console.log(list.pop());
console.log('POP:', list)


