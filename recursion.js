// flatten an array 


// PSEUDOCODE
function flatten(arr) { // CREATE a function declaration : flatten INPUT: array ---> as parameters we will use the name: arr 
   
    
     
        //MERGE the ACC on to the CURVAL element 
        // RETURN CURRVAL if it is an element
        // RETURN the REDUCE method: 
        return arr.reduce((acc, currVal) =>  { // CONSIST of a callback that will take 3 arguments --> ACC, CURRVAL, & INITIAL VALUE 
            // ACC set to INITIAL VALUE which will be an empty array 
            return acc.concat(Array.isArray(currVal) ? flatten(currVal) : currVal)  // REDUCE the array (ARR) that has elements of array to a single array. 
        }, [])







        // CURRVAL will be set as the first element of the array
    // }, []) // INITIAL VAL will be set to an empty array --> []; 
}



   
     // RETURN CURRVAL if it is an element

     const nestedArr = [ 
         ['tony', 'tiger', 'jake', 'bob'], 
         ['tyrone', 'craig'], 
         ['blake', 'griffin'] 
    ]

    console.log(flatten(nestedArr));