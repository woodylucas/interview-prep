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


   

