// Leet Code linked list solutons

// CYCLE 
var hasCycle = function(head) {
    let slow = head; // Declare a slow variable set to head 
    let fast = head; // Declare a fast variable set to head 
    
    // WHILE fast property is not null AND the property next property of fast is not null 
    while (fast && fast.next) {
        slow = slow.next; // Reassign slow variable to the next node property in w/ slow refrence 
        fast = fast.next.next;// Reassign fast variable to the NEXT NEXT node property in w/ fast refrence 
        // IF slow is the same node propery as fast 
        if (slow === fast) return true; // RETURN true
            
    }
    return false;// RETURN false
};

// Middle Link node --> second node element if its even 

var middleNode = function(head) {
    let slow = head; // Declare a variable slow set to head; 
    let fast = head; // Declare a variable fast set to head 
    
    while (fast && fast.next) { // While fast isn't null AND a property of next isn't null 
        slow = slow.next;  // Reassign the slow property to next 
        fast = fast.next.next; // Reassign fast property to the next property after next until condition is met
    }
    return slow; // RETURN slow.
};

function caesarCipher(str, num) {
    num = num % 26; // IF an input num is greater than 26 or less than -26
    let solved = '';
    for(const char of str.split('')) {
      const acsiNum = char.charCodeAt(); 
      let sum = acsiNum + num;
      // EDGE CASE: negative number 
      if (num < 0) sum = 26 + sum;
      
      // LOWERCASE: 
      if (acsiNum >= 97 && acsiNum <= 122) {
        solved += String.fromCharCode(sum > 122 ? sum - 26 : sum) 
      } else if (acsiNum >= 65 && acsiNum <= 90) {
        // UPPERCASE: 
        solved += String.fromCharCode(sum > 90 ? sum - 26 : sum) 
      } else {
        solved += char; 
      }
    }
    return solved; 
  }
  // caesarCipher('Zoo Keeper', 2 )
  // caesarCipher('Big Car', -16 );
  // caesarCipher('Javascript', -900);

  function reverseVowels(s) {
    const strArray = s.split(''); // Declare a const variable set to strArray
    // SWAP function: 
    const swap = (arr, idx1, idx2) => {
      [ arr[idx1], arr[idx2]] = [ arr[idx2], arr[idx1] ]; 
    }
  
    const vowels = ['a','e','i','o','u']; // Declare a const variable set to an array of vowels 
    let left = 0;
    let right = strArray.length - 1; // Declare a variable right set to the end of the array 
    
    while (left < right) {
      if(vowels.indexOf(strArray[left].toLowerCase()) === - 1) {
        left++;
        continue; 
      }
       if(vowels.indexOf(strArray[right].toLowerCase()) === - 1) {
        right--;
        continue; 
      }
      swap(strArray, left, right);
      left++; 
      right--;
    }
    return strArray.join("");
  }

  var lengthOfLongestSubstring = function(s) {
    let longest = 0; // Declare a variable longest set to 0 
    let start = 0 // Declare a variable start set to 0 
    const seen = {}; // Declare a const variable seen set to an empty object 
    
    // FOR loop iterate through string 
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; 
        
        if (seen[char]) {
            start = Math.max(start, seen[char]); 
        }
        
        longest = Math.max(longest, i - start + 1); 
        
        seen[char] = i + 1; 
    }
    return longest; 
};



// A complement pair is a pair where both the positive and negative 
// versions of a number exist within the input.
// The output is returned as an array of unique elements.
// The output can only have positive elements.
// Example input 1: [6,-1,-2,9,-9,1,6,-9] [1,9]
// output: [1,9] || [9,1]

// The order does not matter.
// 1 is included because there is both a positive and a negative 1.
// 9 is included because there is both a positive and a negative 9.
// Example input 2: [-6,-2,9,-1,6,1,1,-2]
// output: [6 1]


    // [6,9,9,1,6,8,8]
    // [-1,-2,-9,-9]
    
    // {6: 2, -1: 1, -2: 1, 9: 1, -9: 2, 8: 2}
    // 
  
    function complementPair(array) {
  
        const positive = [];// Declare const variable postive set to an empty array 
        const negative = [];// Declare const varible negative set to an empty array
        const results = []; 
       
        
        // FOR LOOP: 
        // Set the counter to 0 
        // Break when the counter reaches the end of the array 
        // Increment the counter by 1 
        
        for (const elem of array) {
          if (elem < 0) {
            negative.push(elem); 
          } else {
            positive.push(elem); 
          }
        }
        
        let negHash = buildMap(negative); 
        let posHash = buildMap(positive);
        
        for (const key in posHash) {
          if(key * -1 in negHash) {
            results.push(parseInt(key))
          }
        }
        return results; 
        
      }
      const arr = [6,-1,-2,9,-9,1,6,-9];
      // console.log(complementPair(arr));
      
      function buildMap(arr) {
        const freqCount = {}; 
        for (const key of arr) {
          freqCount[key] = (freqCount[key] || 0) + 1; 
        }
        return freqCount; 
      }
      
      
      // Reverse the vowels within a string. Leave anything that isn't a vowel in the same location.
      // Treat Y as if it isn't a vowel.
      // Perform in constant space and linear time.
      // Example input 1: 'whiteboard'
      // output: 'whatobeird'
      
      // The vowels within 'whiteboard' are ieoa. Those were reversed within the string.
      // Example input 2: 'string test number two'
      
      
      function reverseString(string) {
        const vowels = ['a','e','i','o','u']; 
        const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
        const strArr = string.split('')
        let left = 0; 
        let right = strArr.length - 1; 
        
        while (left < right) {
          
          if(vowels.indexOf(strArr[left].toLowerCase()) === - 1) {
            left++; 
            continue;
          }
          
          if(vowels.indexOf(strArr[right].toLowerCase()) === - 1 ) {
            right--; 
            continue;
          }
          
          swap(strArr, left, right) 
          left++
          right--
        }
        
        return strArr.join(''); 
      }
      
    //   console.log(reverseString('whiteboard')); 
    
function countPairs(n) {
    return (n * (n - 1)) / 2;
}
    
function sherlock(string) {
    const freqCount = {}; 
    let result = 0; 

    for(let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            const sub = string.substring(i, j + 1);
            key = sub.split('').sort().join('')
            freqCount[key] = (freqCount[key] || 0) + 1
        }
    }

    for (const key in freqCount) {
        if (freqCount[key] > 1) {
            result += countPairs(freqCount[key])
        }
    }
    
    return result;
}
// sherlock('kkkk'); 


function balancedStringSplit(s) {
    let balance = 0; 
    let counter = 0; 
    
    for (let i = 0; i < s.length; i++) {
        // IF the element 'L' exist count
        if (s[i] === 'L') {
            counter++; 
        // IF the element 'R' exist decrement count
        } else if (s[i] === 'R') {
            counter--; 
        }
        // IF the count is 0 Increment count
        if (counter === 0) balance++;
    }
    
    return balance; // RETURN balance
};

// console.log(balancedStringSplit('RLRRLLRLRL'));

function reformat(string) {
    // FORMATTED storage
    const results = []
    // SEPERATE the characters 
    const letters = string.split('').filter(char => isNaN(char)); 
    const numbers = string.split('').filter(char => !isNaN(char)); 

    // EDGE CASE 1: If the diffrence of the elements are greater than 1 
    if (Math.abs(letters.length - numbers.length) > 1) return ""; 

    // EDGE CASE 2: IF numbers are more than letters 
    const numberIsMore = numbers.length > letters.length ? true : false;  

    // DECLARE two counters for each individual string 
    let i = 0; 
    let j = 0; 

    // WHILE Loop that iterates through both arrays 
    while (i < letters.length && j < numbers.length) {

        if (numberIsMore) {
        // PUSH the element that has more characters first follow by second if statement is true
        results.push(numbers[j++]); 
        results.push(letters[i++]); 
        } else {
        // FALSE 
        results.push(letters[i++]); 
        results.push(numbers[j++]); 
        }
    }

    // RESIDUAL
    while (i < letters.length) results.push(letters[i++]);
    while (j < numbers.length) results.push(numbers[j++]);

    return results.join(''); // RETURN results as a string 
  }
//   reformat("covid2019")


// Two Sum 


// SOLUTION 1

	// O(n^2) n time is | O(1) space
function twoNumberSum(array, targetSum) {
  // FOR LOOP iterate through array to obtain a single element 
	for (let i = 0; i < array.length; i++) {
		// initialize a const variable set to current element 
		const current = array[i];
		// FOR loop iterate through the array to obtain the next element
		for (let j = i + 1; j < array.length; j++) {
			const next = array[j]; 
			if (current + next === targetSum) {
				return [current, next]; // RETURN an array with those elements stored
			}
		}
			
	}
			// IF the condtion isn't met return an empty array 
	return []; 
}

// SOLUTION # 2
// O(n) runtime | O(n) space 

function twoNumberSum(array, targetSum) {
  // Write your code here.
	const seen = {}; // initialize a const variable set as seen as a dictionary for the array elements
	// iterate through the array and store the difference of the current element and target
	for (const elem of array) {
		// DIFFRENCE 
		const possible = targetSum - elem; 
		// IF this element is a key 
		if (possible in seen) {
			// RETURN an array of the two elements
			return [possible, elem]
		} else {
			// Set the value to true
			seen[elem] = true; 
		}
	}
	// Condtions aren't met so return an empty array
	return [];
}




// solution 3
// O(nlog(n) | O(1) space
function twoNumberSum(array, targetSum) {
  // Write your code here.
	// sort the array in ascending ordered 
	array.sort((a, b) => a - b); 
	// initialize two pointers a left and right 
	let left = 0; // left will start at first index 
	let right = array.length - 1; // right will start from the end 
	while (left < right) {
		// initialize a sum variable that will store the sum of two elements
		const sum = array[left] + array[right]; 
		if (sum === targetSum) {
			// There is a match
			return [array[left], array[right]]; 
		} else if (sum > targetSum) {
			// right pointer towards the left
			right--; 
		} else {
			// sum is less than targetSum so send the pointer to the right 
			left++; 
		}
	}
	// the condition isn't met 
	return []; 
}
      
      
      