// Challenge 1
function countdown(n, newArr = []) {
    // BASE CASE: 
    if(n <= 0) return newArr // IF num is zero RETURN newArr 
    
    newArr.push(n)// PUSH elements into newArr
    
    // RECURSIVE CALL: 
    return countdown(n - 1, newArr) // RETURN countdown invoking parameters n - 1, newArr
  }
  
  // To check if you've completed it, uncomment these console.logs!
  // console.log(countdown(5));
  // console.log(countdown(10));


  // Challenge 2
function sum(array) {
    // BASE CASE: 
    if(array.length === 0) return 0// IF the array has no elements RETURN zero. --> We will use zero as an accumulator. 
    
    const elem = array[0]  // DECLARE a const variable: elem and initialize it to array[0] ---> first element.
    
    // RECURSIVE CALL: 
    return elem + sum(array.slice(1));
  }
  
  // uncomment these to check your work
   // console.log(sum([1,1,1])); // -> returns 3
   // console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
function palindrome(string) {
    let reg = /[\W_]/g; // DECLARE a variable reg is initialize to a Regular Expression /[\W_]/g 
    
    let smallCase = string.toLowerCase().replace(reg, " "); // DECLARE a variable smallCase initialize to string.toLowerCase().replace(reg, ' ');
    // console.log(smallCase)
    // BASE CASE: 
    // IF smallCase strings length is ZERO or ONE 
    if(smallCase.length === 0 || smallCase.length === 1 ) return true; // RETURN true; 
        
    // IF smallCase first charcter doesn't egual the last character 
    if(smallCase[0] !== smallCase[smallCase.length -1]) return false; // RETURN false.
    
    // RECURSIVE CALL
     return palindrome(smallCase.substr(1, -1));
  }
  
  // console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
  // console.log(palindrome("llama mall")); //-> true
  // console.log(palindrome("jmoney")); //-> false
  






function isPrime(num, div = 3) { // Create a default parameter set div 3 
    // A prime number is a number that has a factor of 1 and ITSELF
   
    // BASE CASE:

    // IF num is less than or equal to 2
    if(num <= 2) return num === 2 ? true : false; // IF num is 2 RETURN true 
    
    if(num % div === 0) return false; // IF num MOD div has a remainder of 0 RETURN false  
   
    if(Math.sqrt(div) > num) return true;// IF the square root of div is GREATER than num RETURN true

    // RECURSIVE call 

    // Increment the divisor up by 2 if call conditions fail. To only have an odd divisor.
    return isPrime(num, div + 2)
    // RETURN isPrime(num, div + 1)

}
    
    // console.log(isPrime(1)); //-> false
    // console.log(isPrime(2)); //-> true
    // console.log(isPrime(3)); //-> true
    // console.log(isPrime(4)); //-> false
    
    
   
//Challenge 5
function pathFinder(obj, arr) {
    // FOR IN LOOP --> to iterate over object properties 
            // DECLARE a const: key 
            // IN the obj
    for(const key in obj) {
      // BASE CASE: 
      if(arr.length === 1) return obj[key]; // IF the array has ONE element RETURN the value of the object.
      
      if(key === arr[0]) obj = obj[key] // IF the key matches an array element SETthat key and to its value 
    }
    
    // RECURSIVE CALL ---> reduce every array element to check if the key match that array element
    return pathFinder(obj, arr.slice(1))
  }
  
//   const obj  = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
//   const arr = ["first", "second", "third"];
//   console.log(pathFinder(obj, arr));   //-> "finish"
  
//Challenge 6
function flattenRecursively(arr) {
    // BASE: case: 
  
    return ( 
      // BASE case: 
      // USE a array method: REDUCE.
      // ACC --> will be set to initial value which will be an empty array.
      // CURRVAL --> will be either an array or an element.
      // INITIAL VALUE --> []
      arr.reduce((acc, currVal) => { // REDUCE will take 3 parameters: ACC, CURRVAL, INITIAL VALUE
        
        return acc.concat(Array.isArray(currVal) ? flattenRecursively(currVal) : currVal ) 
        // IF currVal is an array ? --> Array.isArray () method 
        
            // invoke that array into flattenRecursively(currVal) 
                  
        // ELSE 
        
      
                // RETURN currVal  
      }, []) 
    
    )
    
  }
  
  // console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
  // console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
  


// function flatten(oldArray) {
//     let newArray = [];
//    for(let i = 0; i < oldArray.length; i++) {
//        if(Array.isArray(oldArray[i])) {
//            newArray = newArray.concat(flatten(oldArray[i])) 
//        } else {
//            newArray.push(oldArray[i])
//        }
//    }
//    return newArray;
// }

//Challenge 7
function findInOrderedSet(arr, target) {
    const elem = arr[0]// DECLARE a const variable elem initialize it to array[0]
    
    // console.log('ELEMENT:', elem) // TEST element check.
    
    if(elem === target) return true; // IF an element in nums is === to target
    
    if(arr.length === 0) return false; // IF there are no more elements to check return false
    
    return findInOrderedSet(arr.slice(1), target) // recursive call.
  }
  
  // const nums = [1, 4, 6, 7, 9, 17, 45];
  // console.log(findInOrderedSet(nums, 4));  //-> true
  // console.log(findInOrderedSet(nums, 2));  //-> false

  //Challenge 8
function countWaysToReachNthStair(n) {
    // BASE CASE:  
    if (n < 0) return 0// IF n is < 0 return 0 
    if (n === 0) return 1// IF n is 0 return 1 
    
    // RECURSIVE CALL: --> n - 1 steps + n - 2 steps is the total amount of outcome steps you can take.
    
    return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2)
    
  }
  
  // console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
  // console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
  // console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
  
//Challenge 10
function getRangeBetween(x, y, newArr = []) { // DECLARE a const variable for newArr initialize to an []; --> default variable 

  
    // BASE CASE:
    let start = x + 1 // DECLARE a variable start that adds the first input x to 1; 
    
    if(start >= y) return newArr;// IF x is greater than or EQUAL to RETURN a newArr
    newArr.push(start)// PUSH x into newArr;
        
    // RECURSIVE CALL: 
    
    return getRangeBetween(x + 1, y, newArr);
  }
  
  // console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
  // console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]


 //Challenge 9
function getPermutations(arr) {
    const output = [];// DECLARE a const variable output initialize to [];
    // DECLARE a function swap()
    function swap(arrSwap, index1, index2) { // Input: will be array and two indices Labled --> (arrSwap, index1, index2)
      
      const temp = arrSwap[index1] // DECLARE a const variable temp initialize to arrSwap[index1]
     
      arrSwap[index1] = arrSwap[index2] // Swap both elements arrSwap[index1] = arrSwap[index2];
      
      arrSwap[index2] = temp; // Then swap the last element with arrSwap[index2] = temp;
    };
    
    // DECLARE a function generate() 
    function generate(int, heapArr) { // Input: integer (which will be the arrays length) and array --> labeled as int, heapArr
      
      if(int === 1) {	// IF int is equal to 1 
        output.push(heapArr.slice()) // Push heapArr into OUTPUT array and use a slice method to copy (avoid mutation)
        return;
      }
       // Recursive call 
      generate(int - 1, heapArr); // generate(int - 1, heapArr) --> arrays length minus 1
      
      // FOR LOOP: 
        // Set counter to 0
        // Break when counter reaches the length of array (int -1)
        // Incremenet counter by 1 w/ unary operator.
      for(let i = 0; i < int - 1; i++) {
        
        if(int % 2 === 0) { // IF int MOD 2 is 0 --> EVEN 
          
          swap(heapArr, i, int - 1) // swapInPlace(heapArr, i, int - 1) --> swap those two indices 
        } else { 	// ELSE (if its odd)
          swap(heapArr, 0, int - 1) // swapInPlace(heapArr, 0, int - 1) --> swap first element with length.
        }
        generate(int - 1, heapArr) // invokes recursive call --> while we are within the loop.
      }
      
    }
    
    generate(arr.length, arr.slice()) // invoke function w/ arguments. 
    return output; // RETURN the result of output
  }


  // Memoization --> to speed time complexity with fib 

  function memoize(func) {
    const cache = {} // Declare a const variable cache. 

    return function(...args) { // rest parameter --> multiple arguments.
        if(cache[args]) { // IF cache has been called 
            return cache[args] // RETURN that argument.
        }

        const result = func(...args) // individual calls 
        cache[args] = result; // Set value to of cache args

        return result; // return result. 
            
    }
}

function fib(n) {
    if(n < 2) return n; 

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib)
  