// console.log('hello world')

let hen = 4;  // initializing to 4

// A raccoon killeda hen :( 
hen - 1;

hen // still 4!

// To actually change hens: 
hens = hen - 1; 

hens // 3 


let score = 0; 

score += 10 --> // same as score = score + 10; 

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
