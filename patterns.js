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

// Average pairs 

// Write a function called averagePair. Given a sorted array of integers and a target average. If there is a pair of values in the array where the average of pair equals target average 
// There may be one pair that matches the target.

// Declare averagePair() 
function averagePair(array, target) { // Input: array, target  

    let left = 0// Declare a variable left = 0
    let right = array.length - 1 // Declare a variable right = last element in the array 
    while (left < right) { // WHILE left is less that right 
        let avg = array[left] + array[right] / 2; // Declare a variable avg initialize to left + right / 2 
        if (avg === target) {  // IF avg === target 
            return true; // RETURN true
        } else if(avg < target) { // ELSE IF  avg < target 
            left++ // Increment the left side 
        } else {
            right-- // Decrement the right side
        }
    }
return false 
       
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
    


  function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i = 0 // Declare a variable i initialize to zero 

    let j = 0  // Declare a variable j initialize to zero 

    if (!str1) return true; // IF there is no string 1 return true. 

     while (j < str2.length) { // Break condition while j is < string2.length 

         if(str2[j] === str1[i]) i++  // So as long as str2 is str1 increment the character by 1 

         if(i === str1.length) return true // IF the counter of I is the same as str1 length return true 
         
         j++; // Incremenet j by 1.
         console.log('INDEX i:', i, 'INDEX j:', j)
     }
     return false;
    

  }

//   isSubsequence('sing' ,'sting');


// FREQUENCY COUNTER or HASH TABLES

// Anagrams given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word a pharse, or a name formed by rearranging the letters of another
// such as cinema, from iceman 

// Declare a function validAnagram 
function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;// IF str1 length !== str2 length RETURN false;
    
    const str1Array = str1.split('') // Declare a const str1Array initialize to the string w/ split method str1.split('')
    
    const str2Array = str2.split('') // Declare a const str2Array initialize to the string w/ split method str2.split('')
    
    const freqCount1 = {} // Declare a const variable freqCount1 = {}
    
    const freqCount2 = {} // Declare a const variable freqCount2 = {}
   
    // FOR OF iterate through Array 
    // Declare a const variable val OF str1Array
    for(const val of str1Array) {
        if(freqCount1[val]) { // IF the freqCount1 w/ the letter as a key has a value 
            freqCount1[val]++;  // Increment the letter 
        } else { // ELSE if it isn't present 
            freqCount1[val] = 1 // Set the value to 1 
        }
    }

    // FOR OF iterate through Array 
    // Declare a const variable val OF str2Array
    for(const val of str2Array) {  // Declare a const variable elem OF str1
        if(freqCount2[val]) {  // IF the freqCount2 w/ the letter as a key has a value 
            freqCount2[val]++  // Increment the letter 
        } else { // ELSE if it isn't present 
            freqCount2[val] = 1; // Set the value to 1 
        }
    }

    // FOR IN LOOP: to iterate through key and value pairs. 
    // Declare a const variable key in freqCount1
    for (const key in freqCount1) { // IF key is not in freqCounter2 RETURN false
        if (!(key in freqCount2)) return false; // IF freqCount1 value doesn't match freqCount 2 RETURN false 
        if(freqCount2[key] !== freqCount1[key]) return false;
    }
   return true // RETURN true.
}
// console.log(validAnagram('cinema', 'iceman'))


function validAnagram2(str1, str2) {
    // EDGE CASE: 
    if(str1.length !== str2.length) return false; // IF str1 length is not equal to str2 length RETURN false
    const lookup = {}; // Declare a const variable lookup initialize to {}
    // FOR LOOP: 
    // Set counter to 0 
    // Break when counter reaches the end of the string 1
    // Increment counter by 1 w/ unary operator.
    for(let i = 0; i < str1.length; i++) {
        const letter = str1[i] // Declare a variable letter initialize to str[i]
        // If the letter exist increment, otherwise set to 1
        lookup[letter] ? lookup[letter]++ : lookup[letter] = 1; 
    }
    // FOR LOOP: 
    // Set counter to 0 
    // Break when counter reached the end of string 2 
    // Increment counter by 1 w/ unary operator.
    for(let i = 0; i < str2.length; i++) {
        const letter = str2[i] // Declare a variable letter initialize to string 2 element 
        if(!lookup[letter]) { // IF the letter is not in lookup object 
            return false; // RETURN false 
        }  else {
            lookup[letter]-- // Decrement by 1 w/ unary operator 
        }
    }
    return true
}

// console.log(validAnagram2('cinema', 'iceman'))


// Sliding Window Pattern 
// The pattern involes creating a window can be either an array or number from one position to another 
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of subset of data in an array/string 

// Write a function called maxSubarray Sum which accepts an array of integers and a number called n 
// The function should calculate the maximum sum of n consecutive elements in the array 

// Declare a function maxSubarray()
function maxSubarraySum(arr, n) { // Input: array and a number --> Parameters: arr, n 
    let maxSum = 0; // Declare a variable maxSum initialzie to 0
    let tempSum = 0;// Declare a variable tempSum initialize to 0
    // FOR LOOP:
    // Set counter to 0 
    // Break when counter reaches the number of n 
    // Increment counter by 1 
    for(let i = 0; i < n; i++) {
        maxSum += arr[i] // Update the sum of the total amount of n array elements and store its value in maxSum.
    }
    tempSum = maxSum; // Reassign the value of tempSum to equal the value of maxSum 
    // FOR LOOP: 
    // Set counter to n 
    // Break counter when it reaches the end of the array. 
    // Increment counter by 1 
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]  // Set the value of tempSum to initialize the current temp sum - n amount of elements, then add a element 
        maxSum = Math.max(tempSum, maxSum)  // Set maxSum to the max of the two variables maxSum and tempSum 
    }
    return maxSum;
}



// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
    
    
        
       
   
    