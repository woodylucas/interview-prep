// Multiple pointers
// Creating pointers or values that corresponds to an index or position and move towards the beginning, or middle based on a certain condition 


// Write a function called sumZero that accepts a sorted array of integers. The function should find the pair where the sum is 0. Return an array that inludes both values 
// that sums to zero or undefined if a pair does not exist 




// The array has to be SORTED!

// SPACE COMPLEXITY O(1) O(N)
// Declare a function sumZero 
function sumZero(arr) { // Input: arr 
    
    let left = 0; // Declare a variable left initialize to zero. --> this will be counting from the left side 

    let right = arr.length - 1 // Declare a variable right initiazlize to arr.length - 1 ---> this will count form the right side the array

    while(left < right) { // Break condtion --> while the array left side is less that the right 

        let sum = arr[left] + arr[right]; // Declare a variable sum that is initialize to the total of array elements from the left and the right.

        if (sum === 0) {  // IF the sum is zero. 

            return [ arr[left], arr[right] ]  // Return that index

        } else if (sum > 0) {  // ELSE IF sum is greater than zero 

            right-- // Decrement counter from the right 

        } else { // ELSE 

            left++ // Increment from the left 
        }
            
    }
}    

// Count Unique Values 

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will be SORTED

// Declare a function countUniqueValues
function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    // EDGE CASE: 
    if(arr.length === 0 ) return 0// IF the array length is 0 RETURN 0 
    
    let i = 0 // Declare a variable i initialize to 0 
    // FOR LOOP: 
    // Set counter to 1
    // Break when counter reaches end of array length 
    // Increment counter by one using a unary operator
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]) { // IF the element at index i is not the element at the index j 
            i++ // Increment i by one with a unary operator
            arr[i] = arr[j]
        }
    }
    return i + 1 // RETURN i + 1 --> this will return the arrays length
  }
    
    
    
    
        
       
   
    