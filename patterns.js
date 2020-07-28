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

    
    
    
        
       
   
    