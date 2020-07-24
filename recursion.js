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


   

