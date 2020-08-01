// console.log('hello world')

let hen = 4;  // initializing to 4

// A raccoon killeda hen :( 
hen - 1;

hen // still 4!

// To actually change hens: 
hens = hen - 1; 

hens // 3 


let score = 0; 

score += 10  // -->  same as score = score + 10; 

let counter = 0; 

// unary operator, means that they're are only one side. 

counter++ // is the same as counter += 1 

// strings are INDEXED starting from 0 

let stringName = 'chicken'

stringName.length // 6 ---> every string has a property of length.

let songName = "Surfin in' USA"

songName[0] // access the very first character in the string. 

// string methods 

songName.toUpperCase();
songName.toLowerCase();


'baseball'.indexOf('ball') // index: 4
'baseball'.indexOf('b') // first instance of 'b' ---> returns 0.

'baseball'.slice(4) // --> starts at index of 4 remember STRINGs are immutable so it won't change the string 


'this is very entertaining'.replace('entertaing', 'nice'); // replace word.

// console.log('he said I ain\'t happy'); // to add a single ' 
// zconsole.log("HELLO\n GOODBYE") // new line 

const fruits = [
    'apple', 'banana'
]

const veggies = [
    'asparagus', 'brussel sprouts'
]

const meats = [
    'steak', 'chicken breast'
]

const allFoods = fruits.concat(veggies, meats)

// console.log(allFoods)

const ingredients = [
    'water', 
    'corn starch', 
    'flour', 
    'cheese', 
    'brown sugar', 
    'shrimp', 
    'eel',
    'butter'
]

ingredients.includes('fish') // false ---> checking to see if that element exist in array

/*
function chunk(array, size) {
    const chunks = []; // Declare a variable chunks initialize to an empty array.
 
     // FOR OF: iterate through array
     // Declare a const variable elem OF array. 
     for(const elem of array) {
         const last = chunks[chunks.length - 1 ] // Declare a const variable last, initialize to the last element in chunks
         console.log(last)
         if(!last || last.length === size) { // IF last doesn't exist OR last variable length is size. 
             chunks.push([ elem ]) // PUSH a new array and element into chunks
         } else {  // ELSE 
             last.push(elem) // PUSH element into last element.
         }
     }             
     return chunks; // RETURN chunks. 
 }

*/

 function chunk(array, size) {
    const chunks = [];// Declare a variable chunks set to an empty array. 
    let index = 0;// Declare a variable index set to 0. 
 
    // WHILE LOOP. 
    // While index is less than arrays length
    while(index < array.length) {
        console.log('INDEX:',index)
         chunks.push(array.slice(index, index + size))// Push array COPY of starting at the index , and index + its size 
         index += size// Set the index value to size.
    }
    return chunks;
 }

//  console.log(chunk([1, 2, 3, 4, 5], 2))

function whileLoop(arr) {
  let mapArr = [];
  let productOf = 2; 
  let index = 0; 
  while(index < arr.length) {
      mapArr.push(productOf *= arr[index])
      index++; 
  }
  return mapArr; 
}

// console.log(whileLoop([1, 2, 3, 4, 5]))

function factorialize(num) {
    let productOf = 1
    for(let i = 1; i <= num ; i++) {
      productOf *= i
      console.log(productOf)
    }
   return productOf;
  }
  
//   console.log(factorialize(5))

function spliceMethod(arr) {
    //      start remove add 
    arr.splice(2, 0, 'zebra', 'lion') // IF 
    return arr;
}
const array = ['shark,', 'salmon', 'whale','bear', 'lizard', 'tortoise']
console.log(spliceMethod(array))