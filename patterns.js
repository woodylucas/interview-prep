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


function anagrams(stringA, stringB) {
  
    let regexStrA = stringA.replace(/[^\w]/g, '').toLowerCase();  // Delcare a variable regexStrA set to string A w/ replace method /[^\w]/g, '' and a lowercase method
    
    let regextStrB = stringB.replace(/[^\w]/g, '').toLowerCase(); // Declare a variable regextStrB set string B w/ replace method [/[^\w]/g, '' and a lowercase method
  
     // EDGE CASE: 
  
    if(regexStrA.length !== regextStrB.length) return false; // IF regexStrA length is not the same as regexStrA return false
  
   const freqCount = {}; // Declare a const variable freqCount set to an empty object.
  
    // FOR LOOP: iterate through regexStrA 
    for(const val of regexStrA) { 
      if(!freqCount[val]) { // IF the key exist but has no value in freqCount
  
       freqCount[val] = 1; // Set the value in freqCount to 1 
  
      } else { // ElSE (if the value exist)
      
       freqCount[val]++; // Increment the value by 1. 
      }
    }
      // FOR LOOP: iterate through regextStrB
      for(const val of regextStrB){
  
        // IF the value doesn't match the freqCount object 
        if(!freqCount[val]) { 
  
          return false; // RETURN false. 
  
        } else {  // ELSE (if the value exist)
  
          freqCount[val]--// Decrement the value in the freqCount by 1. 
  
        }
      }
      return true;// RETURN true. 
  }
  
//   console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))

function anagrams2(stringA, stringB) {
    const charCount1 = buildCharMap(stringA); // Declare a const variable charCount1  set to buildCharMap passing in stringA.
  
    const charCount2 = buildCharMap(stringB) // Declare a const variable charCount2  set to buildCharMap passing in stringA.
  
    // EDGE CASE: 
    
    // IF the keys in charCount1 does not match charCount2 
    if(Object.keys(charCount1).length !== Object.keys(charCount2).length) {
      return false; // RETURN false 
    }
      
    
    // FOR IN LOOP: to iterate over key value pairs. 
    for(const val in charCount1) {
      if(charCount1[val] !== charCount2[val]) {
        return false // IF the value do not match 
      }
    }
    return true; // RETURN true. 
  
    console.log('STRING A:', charCount1)
    console.log('STRING B:', charCount2)
  
  }
  
  function buildCharMap(str) { // helper map function
    const freqCount = {};// Declare a const variable freqCount set to an empty object. 
    // FOR OF LOOP: iterate through the str w/ removing special characters.
    for(const char of str.replace(/[^\w]/g, '').toLowerCase()) {
      freqCount[char] = (freqCount[char] || 0) + 1;
    }
      // IF the key has a value set the value to one else increment by 1.
    return freqCount; // RETURN freqCount
  }
  
  anagrams2('RAIL! SAFETY!', 'fairy tales')


// Sliding Window Pattern 
// The pattern involes creating a window can be either an array or number from one position to another 
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of subset of data in an array/string 

// Write a function called maxSubarray Sum which accepts an array of integers and a number called n 
// The function should calculate the maximum sum of n consecutive elements in the array 

// Declare a function maxSubarray()
function maxSubarraySum(arr, n) { // Input: array and a number --> Parameters: arr, n 
    // EDGE CASE: 
    if(arr.length < n) return null // IF arr.length is less than n RETURN null.
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

function maxSubarraySum2(arr, n){
    // EDGE CASE: 
    if(arr.length < n) return null;// IF arrays length is less than n RETURN null.
    let maxSum = 0;// Declare a varible maxSum initialize to 0.
    let tempSum = 0;// Declare a variable tempSum initialize to 0.

    // FOR LOOP: 
    // Set counter to 0 
    // Break when counter reaches n 
    // Increment counter by 1 .
    for(let i = 0; i < n; i++) {
        maxSum += arr[i];// maxSum will add and save the value of the elements of the array length of n 
    }


    tempSum = maxSum;// Set tempSum to maxSum 

    // FOR LOOP:
    // Set counter to n --> will start at that position in the array.
    // Break when counter reaches the end of the array
    // Increment counter by 1 w/ unary operator.
    for(let i = n; i< arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]; // Set the value of tempSum to tempSum(currentValue) minus the first element, then adding the next element. 
        maxSum = Math.max(maxSum, tempSum );// Set maxSum initialize to the method Math.max with maxSum and tempSum as the arguments 
    }

    return maxSum; // RETURN maxSum.

}

// console.log(maxSubarraySum2([100, 200, 300, 400], 2)) // -> 700


function minSubArrayLen(arr, sum) {
    let total = 0; // Declare a variable total initialize to 0. ---> 
    
    let startPoint = 0; // Declare a variable start initialize to 0. --> the start pointer 
    
    let endPoint = 0;  // Declare a variable end initialize to 0. --> end pointer 
    
    let minLen = Infinity; // Declare a variable minLen initialize to Infinity. --> to take account of all postive integers
    
    // WHILE LOOP: while start is less than the array's length. 
    while (startPoint < arr.length) {
        // IF the current window doesn't add up to the given sum 
            //move the pointer to the right 
        if(total < sum && endPoint < arr.length) { // IF total is less than sum AND end is less than the arrays length. 
            // console.log('TOTAL:', total )
            total += arr[endPoint] // Total will add the value of array elements to all the way to end.
            endPoint++;  // Increment the end pointer by one w/ unary operator. 

        } else if(total >= sum) { // ELSE IF total greater than OR EQUAL to sum.
            // console.log('TOTAL:', total)
            // console.log('START', startPoint)
            // console.log('END', endPoint)
            // console.log('DIFFRENCE:', endPoint - startPoint)
            minLen = Math.min(minLen, endPoint - startPoint)// Set minLen to Math.min of minLen and the DIFFERENCE of end and start 
            total -= arr[startPoint] // Substract the total from the startPointer of the array.
            startPoint++; // Increment start by 1 
        } else { // ELSE the total is less than required
            break;  // Break; 
        }
    }
      return minLen === Infinity ? 0 : minLen  // IF minLen is Infinity RETURN zero or RETURN minLen. 

}
                        //  0 1 2 3  4 5 6 7  8  9 10 
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95))
   
// Declare a function findLongestSubstring()
function findLongestSubstring(str) { // Input: str
    let longest = 0; 
    let seen = {};
    let start = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
        start = Math.max(start, seen[char]);
        }
       
    // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1); 
    // store the index of the next char so as to not double count
    
     seen[char] = i + 1;
    }
    return longest;
}


// console.log(findLongestSubstring('thisisawesome'))

function lengthOfLongestSubstring(str) {
    let left = 0; 
    let longest = 0;
    const count = {};

    for(let right = 0; right < str.length;) { // Don't increment block will contain instructions to increment left or right 
        if(!count[str[right]]) { // IF the key exist and there is no value. 
            count[str[right]] = 0; // Set the value to 0
        }
        count[str[right]]++; // Increment the value by 1 

        if(Object.values(count).some(elem => elem > 1)) { // IF one of the values is greater than 1 means it is a duplicate.
            count[str[left]]--; // Remove that duplicate by decrementing down by 1. So the character is no longer in our window 
            left++; // Increment the next substring to evaluate the next substring 
        }  
        longest = Math.max(longest, right - left + 1);
        right++;
    }
    return longest; 
}


// console.log(lengthOfLongestSubstring('thisisawesome'))

function pyramid(n) {
    let oddSequence = (2 * n) - 1 // Declare a variable oddSequence set to a sequence of odd numbers for the columns.
    let midpoint = Math.floor(oddSequence / 2); // Declare a variable midpoint set to pyramid divided by 2 to obtain the midpoint. 
    
    // FOR LOOP: iterate from 0 to n. 
    for(let row = 0; row < n; row++) {
        // Declare a variable level set to an emptyString 
        let level = "";
        // FOR LOOP: iterates 0 to oddSequence 
        for(let column = 0; column < oddSequence; column++) {
            // IF midpoint - row less than or equal to column AND midpoint + row is GREATER than or equal to column 
            if(midpoint - row <= column && midpoint + row >= column) {
                level += '#'; // Set level to a hash.
            } else {   // ELSE 
                level += " " // Set level to an empty string 
            }
        }
         console.log(level)// PRINT level. 
    }
        
       
}


function pyramid(n, row = 0, level = '') {
    // Recursive solution 
    const oddSequence = (2 * n - 1); // Declare a variable oddSequence set to (2n - 1)
    // BASE CASE:

    // IF row is the same as n 
    if(row === n) return; // BREAK 

        
    
    if(level.length === oddSequence) { // IF the length of level string is the same as oddSeqeunce
        console.log(level);  // PRINT level
        // RECUSIVE LINE : 

        return pyramid(n, row + 1); // RETURN pyramid w/ row being incremented by 1 
    }

   
    const midpoint = Math.floor( oddSequence / 2 );  // Declare a variable midpoint set to (oddSequence / 2 )
    
   
    let add;  // Declare a undefined variable add. 

    // IF midpoint DIFF of row is LESS than or EQUAL to level's string length AND midPoint SUM of row GREATER than or equal to leve's strings length 
    if(midpoint - row <= level.length && midpoint + row >= level.length) {
         
        add = '#'; // Set the value of ADD to '#' 

    } else {   // ELSE 

        add = ' '; // SET the value of ADD to a a space --> ' '
    }

    pyramid(n, row, level + add)   // PYRAMID invoked with these arguments  n, row, level + add
}

//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function matrix(n) {
    const results = [];// Declare a variable result initialize to empty arrays of arrays 
    // FOR LOOP:
      // PUSH a new array into results array.
      for(let i = 0; i < n; i++) {
        results.push([]);
      }
  
      console.log(results)
  
    let startRow = 0;// Declare a variable startRow set to 0. 
    let endRow = n - 1;// Declare a variable endRow set to n - 1.
    let startColumn = 0;// Declare a variable startColumn set to 0.
    let endColumn = n - 1;// Declare a variable endColumn set to n - 1. 
    let count = 1
  
    // WHILE LOOP: 
    // While the row and columns are less than or equal to each other. 
    while(startColumn <= endColumn && startRow <= endRow) {
  
      // FIRST row 
  
      // FOR LOOP: 
      // Set counter to startColumn 
      // Break when startColumn reaches endColumn
      // Increment by 1. 
      for(let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = count;// Set results startRow to counter
        count++; // Increment counter by 1. 
        console.log(count)
       
      }
      startRow++  // Increment startRow by 1.
  
  // RIGHT column: 
  
      // FOR LOOP:
      // Set counter startRow
      // Break when startRow reaches the end of endRow.
      for(let i = startRow; i <= endRow; i++ ) {
        results[i][endColumn] = count// Set results endRow to counter 
        count++; // Increment counter by 1.
      }
      endColumn--// Decrement endColumn by 1 
  
    // Bottow Row
      // FOR LOOP: 
      // Set counter to endColumn 
      // Break when startColumn reaches endColumn
      // Decrement endColumn by 1.
      for(let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = count;// Set results to endRow to counter
        count++; // Increment count by 1. 
      }
      
      endRow--// Decrement endRow
  
    // Start Column: 
      // FOR LOOP: 
      // Set counter to endRow 
      // Break when startRow reaches counter.
      // Decrement endRow by 1.
      for(let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = count// Set result to startColumn 
        count++// Increment counter by 1
      }
      startColumn++;
    }
    return results;
  }
  
  
  // --- Examples
    // matrix(2)
  //     [[1, 2],
  //     [4, 3]]
  //   matrix(3)
  //     [[1, 2, 3],
  //     [8, 9, 4],
  //     [7, 6, 5]]
  //  matrix(4)
  //     [[1,   2,  3, 4],
  //     [12, 13, 14, 5],
  //     [11, 16, 15, 6],
  //     [10,  9,  8, 7]]
