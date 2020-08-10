// Queues from scatch.

class Queue { // FIFO --> 
    constructor(){
        this.data = []; // Declare a instance data set to a storage 
    }
    add(record) { // Declare a method add --> INPUT ---> record 
        this.data.unshift(record) // Add the record to the beginning of the Queue 
    }

    remove() { 
        return this.data.pop() // REMOVES last element --> in this instance it's the first record passed in
    }

    peek() {
        this.data[this.data.length -1]; // Search queue 
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

class Stack { // FILO --> First In Last Out 
    constructor() {
        this.data = []; // Declare a storage 
    }
    push(record) {
        this.data.push(record); // PUSH record in to stack 
    }
    pop() {
        return this.data.pop(); // REMOVE the last record 
    }
    peek() {
        return this.data[this.data.length - 1]; // Search stack 
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
    constructor(val) { // Declare a constructor function --> which takes in one property 
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

    // Declare a push method --> will add a node property to END of the link list. 
    push(val) {
        const newNode = new Node(val) // Declare const variable newNode set to new Node w/ data passed in.
        if (!this.head) {  // IF there is no head 
            // NODE is empty
            this.head = newNode; // Set head to newNode
            this.tail = this.head; // Set tail to head 
        } else { // ELSE 
            // NODE exist
            this.tail.next = newNode; // Point the tail property to the newNode property w/ this.tail.next --> newNode
            this.tail = newNode; // Reassign this.tail to the newNode. 
        }
        this.length++// INCREMENT length by 1
        return this; // RETURN the linked list --> this. 

    }
    // Define a function: pop() --> remove a node property from the END of the link list.
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
    
    shift() { // Define a method shift()
        if(!this.head) { // IF there is no head 
            return null; // RETURN null 
        }     
        let currHead = this.head; // Declare a variable currHead set to this.head 
        this.head = currHead.next; // Reassign this.head to currHead.next
        this.length--; // Decrement this.length by 1
        return currHead; // RETURN currHead; 
    }
    // Declare a method unshift --> val
    unshift(val) {
        let newNode = new Node(val); // Declare a variable node set to new Node of val; 

        if (!this.head) { // IF head does not exist 
            this.head = newNode; // Set this.head to newNode 
            this.tail = this.head; // Set this.tail to head 
        } else { // ELSE 
            newNode.next = this.head; // Point the newNode to the head property newNode -> this.head 
            this.head = newNode; // Reassign the head to the newNode property
        }
        this.length++; // INCREMENT this.length by 1
        return this; // RETURN the list --> this
    }

    // Declare a method --> get() INPUT: index 
    get(index) {
        // IF index is less than 0 OR index is GREATER than or equal to this.length 
        if (index < 0 || index >= this.length) {
            return null;  // RETURN null 
        }
        let currNode = this.head; // Declare a variable node set to this.head
        let counter = 0; // Declare a variable counter set to 0 
        // WHILE counter doesn't equal to index 
        while (counter !== index) {
            currNode = currNode.next; // Reassign the currNode to the next Node 
            counter++; // Increment counter by 1 until the while loop condition is false
        }
        return currNode; // RETURN currNode. 
    }
    // Declare a set method
    set(index, val) { // INPUT: index, val
        let node = this.get(index); // Declare a variable node set to this.get method with the index passed in 
        if (node) { // IF node exist
            node.val = node; // Set node.val to node 
            return true; // RETURN true
        }     
        return false; // RETURN false
    }

    // Declare method insert --> index, value 
    insert(index, value) {

        // IF index less than 0 OR index GREATER than this.length 
         if (index < 0 || index > this.length) {
            return false; // RETURN false 
         }

        // IF index is this.length 
        if (index === this.length) {
            return !!this.push(val) // PUSH newNode to end of list (!! coerces to a boolean property)
        }
           
        // IF index is 0 
        if (index == 0) {
            return !!this.unshift(val) // UNSHIFT newNode --> place newNode in the beginning of list  (!! coerces to a boolean property)
        }

        let newNode = new Node(val) // Declare a variable newNode set to new Node w/ val passed in
        let previousNode = this.get(index - 1); // Declare a variable previousNode set to get method index - 1 --> so we obtain the method before the postion of insertion 
        let temp = previousNode.next; // Declare a variable temp set to the property of the previous node
        previousNode.next = newNode;// Set next property of previousNode to newNode  
        newNode.next = temp; // Set the next property of newNode to temp
        // Increment this.length by 1 
        // RETURN true 
    }

    // REMOVE method 
    remove(index) {
        // IF index is less than 0 OR greater than length 
            // RETURN null 
        // IF index is this.length - 1 
            // USE pop method to remove last node property. 
    }
        
}

const list = new SinglyLinkedList(); 

console.log(list.push('HELLO'));
console.log(list.push('GOODBYE'));
console.log(list.push('!')); 
console.log(list.push('<3'));
console.log(list.push(':)'));
// console.log(list.pop());
// console.log('RESULT :', list);
// console.log(list.pop());
// console.log('POP:', list)
// console.log('EXTRACT HELLO:', list.shift())
// console.log('NEW LIST:', list)
// console.log(list.unshift('ADD ME')); 
console.log(list.get(100))
console.log(list.set(2, '!!!!'))



