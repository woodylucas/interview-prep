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

function longestPalindromicSubstring(string) {
  // Write your code here.
	
	let longest = '';// initialize a variable longest that will be set to an empty string
	// iterate over string to create substring w/ nested loops
	for (let i = 0; i < string.length; i++) {
		for(let j = i; j < string.length; j++) {
			// manipulate the string with slice to create multiple substrings
			const substring = string.slice(i, j + 1); 
			// to obtain the the longest substring check to see if its longer than longest AND is a palindrome
			if (substring.length > longest.length && isPalindrome(substring)) {
				// store the substring into longest
				longest = substring;
			}
		}
	}
	return longest; // return the longest substring that was stored
}
// Helper function 
function isPalindrome(str) {
	// start from the beginning of the string and the end
	let leftIdx = 0; 
	let rightIdx = str.length - 1;
// while left is less than right keep iterating 
	while (leftIdx < rightIdx) {
		// both characters at opposite indices don't match it isn't a palindrome
		if (str[leftIdx] !== str[rightIdx]) return false; 
		// True until one of these condtions are not met 
		leftIdx++; 
		rightIdx--; 
	}
	return true; 
}

// O(n^ 2) time | O (1) space
function longestPalindromicSubstring(string) {
  // Write your code here.
	// initialize a variable currentLongest set to the first and second character of the string 
	let currentLongest = [0, 1]; 
	for (let i = 1; i < string.length; i++) {
		// i - 1 left index i + 1 right index 
		let odd = expandFromMiddle(string, i - 1, i + 1); 
		// i - 1 left index and i represents out current letter
		let even = expandFromMiddle(string, i - 1, i); 
		let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even  
		currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest; 
	}
	return string.slice(currentLongest[0], currentLongest[1]); 
}

function expandFromMiddle(string, leftIdx, rightIdx) {
	while (leftIdx >= 0 && rightIdx < string.length ) {
		if (string[leftIdx] !== string[rightIdx]) break; 
		leftIdx--; 
		rightIdx++;
	}
	return [leftIdx + 1, rightIdx]; 
}



function groupAnagrams(words) {
  // Write your code here.
	const freqCount = {}; 
	for (const word of words) {
		const sortedWord = word.split('').sort().join(''); 
		if (sortedWord in freqCount) {
			freqCount[sortedWord].push(word);
		} else {
			freqCount[sortedWord] = [word]; 
		}
	}
	return Object.values(freqCount); 
}
      


function longestSubstringWithoutDuplication(string) {
  // Write your code here.
	const seen = {}; // initialize a variable that stores an empty object 
	let startIdx = 0; // marker for starting index 
	let longest = [0, 1]; // Two indices
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (char in seen) {
			// update the startIdx 
			startIdx = Math.max(startIdx, seen[char] + 1); 
		}
		if (longest[1] - longest[0] < i + 1 - startIdx) {
			longest = [startIdx, i + 1]; 
		}
		seen[char] = i;
	}
	return string.slice(longest[0], longest[1]);
}



function rgb(string) {
  let min = Infinity; // initialize a variable to store the min amount, so store a high number. 
  const freqCount = {}; // initialize a const variable set to an empty object to store occurrences 

  // FOR LOOP: iterate through string and collect all the characters frequency of occurrences
  for (const character of string) {
     // IF the character occurs onces add its character as a key and its occurrence 1 as its value, appears again 
    if (!freqCount[character]) {
      freqCount[character] = 1; 
    } else {
      //  character exist? increment its value by 1
      freqCount[character]++; 
    }
  }
  // FOR IN LOOP ---> iterate through key & value pairs  
  for (const character in freqCount) {
    freqCount.hasOwnProperty('r') &&
    freqCount.hasOwnProperty('g') &&
    freqCount.hasOwnProperty('b') ? min = Math.min(min, freqCount[character]) : min = 0; 
  }

  return min; 
}

function missingNumber(n, arr) {
  // YOUR WORK HERE
  const missing = []; // initialize an empty array that will store the result
  const lookup = {}; // initialize an empty object that will serve as a lookup for elements 

  // FOR LOOP iterate through elements and store the number as its key and and a boolean if they exist
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    lookup[num] = true; 
  }
  // FOR LOOP iterate through n and obtain all the numbers starting from 1 to n
  for (let i = 1; i <= n; i++) {
    const num = i; 
    // IF the number doesn't exist in lookup 
    if (parseInt(num) in lookup === false) {
      missing.push(num); // PUSH that number into missing array
    }
  }
  return missing; // RETURN missing elements
}



function getDuplicates(arr) {
  // YOUR WORK HERE
  const freqCount = {}; 
  const duplicates = []
  for (const element of arr) {
    freqCount[element] = (freqCount[element] || 0) + 1; 
  }
  for (const key in freqCount) {
    if (freqCount[key] >= 2) {
      duplicates.push(parseInt(key))
    }
  }
  return duplicates; 
}

function anagramPair(string1, string2) {
  // YOUR WORK HERE
  const str1Map = charMap(string1); 
  const str2Map = charMap(string2);
  // EDGE CASE: 
  if (Object.keys(str1Map).length !== Object.keys(str2Map).length) return false; 

  for (const character in str1Map) {
    if (str1Map[character] !== str2Map[character]) return false; 
  }
  return true; 
}
// HELPER METHOD
function charMap(string) {
  const freqCount = {}; 
  for (const char of string) {
    freqCount[char] = (freqCount[char] || 0) + 1; 
  }
  return freqCount; 
}


function characterMode(string) {
  // YOUR WORK HERE
 // initialize a const variable maxChar to empty string that will store the max characters 
 let maxCharacters = [];
 // initialize a max that will store the max numbers which will be the value 
 let max = 0; 
 // initialzie a const variable that will store an empty object 
 const freqCount = {}; 

 // FOR LOOP iterate through the string and obtain all the string characters occurrences with a hash map 
 for (const char of string) {
   freqCount[char] = (freqCount[char] || 0) + 1; 
 }

 // FOR IN LOOP to iterate over our hash map object 
 const vals = Object.values(freqCount);
 for (const char in freqCount) {
   // initialize a variable current
   const currentVal = freqCount[char];
   // IF current is greater than max 
   max = Math.max(...vals, max); 
   if (max === currentVal) {
     maxCharacters.push(char);  // maxCharacters will store the max key
   }
 }
  return maxCharacters.join('');// RETURN maxcharacters
}