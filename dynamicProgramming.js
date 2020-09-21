function maxSubarray(array) {
    // Write your code here.
    // O(n) time | O (1) space 
    let maxEndingHere = nums[0]; // initialize a variable set to maxEndingHere 
    let maxSoFar = nums[0]; // initialize a variable set to maxSoFar
    // iterate through the nums array 
    for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    maxEndingHere = Math.max(num, maxEndingHere + num); // sum of the first element and the current value.
    maxSoFar = Math.max(maxSoFar, maxEndingHere); // Obtain the max between the first index and maxEndingSoFar
    }
    return maxSoFar; // RETURN maxSoFar
}

function longestPalindromicSubstring(string) {
    // Write your code here.
    // O(n ^2) time | O(n) space
      let currentLongest = [0, 1]; // initialize an array starting at 0 and 1 --> i + 1
      for (let i = 1; i < string.length; i++) {
          const odd = expandFromMiddle(string, i - 1, i); // a b a
          const even  = expandFromMiddle(string, i - 1, i + 1); // ab ba
          const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; 
          currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest
      }
      return string.slice(currentLongest[0], currentLongest[1]); 
  }
  
  
  function expandFromMiddle(string, leftIdx, rightIdx) {
      while (leftIdx >= 0 && rightIdx < string.length) {
          if (string[leftIdx] !== string[rightIdx]) break; 
          leftIdx--; 
          rightIdx++; 
      } 
      return [leftIdx + 1, rightIdx]; 
  }


  function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
      // O(n) time | O(n) space
      if (!array.length) return 0; 
      if (array.length === 1) return array[0];
      let second = array[0]; 
      let first = Math.max(array[0], array[1]); 
      for (let i = 2; i < array.length; i++) {
          const current = Math.max(first, second + array[i]); 
          second = first; 
          first = current; 
      }
      return first; 
  }

  function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
      // create an array with a size of n + 1. 
      const numOfCoins = Array.from({length: n + 1}, () => Infinity); 
      // Set the first element to 0; --> the first index is 0 coins. 
      numOfCoins[0] = 0; 
      // iterate over our denominations 
      for (const denom of denoms) {
          for (let amount = 0; amount < numOfCoins.length; amount++) {
              if (denom <= amount) {
                  numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
              }
          }
      }
      return numOfCoins[n] !== Infinity ? numOfCoins[n] : - 1;
  }

  function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
      // initialize a function that will have an array size of n + 1, and have arbitrary values of 0.
      const ways = Array.from({length: n + 1}, () => 0); 
      ways[0] = 1; // Store the first element to 1 we can only have 1 amount of coin of 0.
      // iterate through our denominations array. 
      for (const denom of denoms) {
          // iterate through our ways array and use out index as the amount 
          for (let amount = 1; amount < ways.length; amount++) {
              if (amount >= denom) {
                  ways[amount] += ways[amount - denom];
              }
          }
      }
      return ways[n]; // return ways of the element of end could also return the last element
  }
  
  function smallestSubstringContaining(bigString, smallString) {
    // Write your code here.
      // create a hash table for the small string
      const targetCharCounts = getCharCounts(smallString);
      const substringBounds = getSubstringBounds(bigString, targetCharCounts);
      return getStringFromBounds(bigString, substringBounds); 
  }
  
  
  // Building up out character counts with a loop
  function getCharCounts(string) {
      const charCounts = {}; 
      for (const char of string) {
          increaseCharCount(char, charCounts); 
      }
      return charCounts;
  }
  
  
  // getSubstringBounds method 
  function getSubstringBounds(string, targetCharCounts) {
      let substringBounds = [0, Infinity]
      // create a hash table for the substring characters counts in given substring --> building as we go 
      const substringCharCounts = {}; 
      const numUniqueChars = Object.keys(targetCharCounts).length; 
      let numUniqueCharsDone = 0; // IF numUniqueCharsDone is set to 0 we are going to increment by 1 until its equal to the length of numOfUniqueChars count.
      let leftIdx = 0;
      let rightIdx = 0; 
      // Move the rightIdx to the right in the string until you've counted 
      // all of the target characters enough times. 
      while (rightIdx < string.length) {
          let rightChar = string[rightIdx]; 
          if (!(rightChar in targetCharCounts)) {
              rightIdx++; 
              continue; 
          }
          // creating a hash for that substring 
          increaseCharCount(rightChar, substringCharCounts);
          if (substringCharCounts[rightChar] === targetCharCounts[rightChar]) {
              numUniqueCharsDone++; 
          }	
          // when we found out numUniqueChars done is equal to our number of unique characters 
          while (numUniqueCharsDone === numUniqueChars && leftIdx <= rightIdx) {
              substringBounds = getCloserBounds(leftIdx, rightIdx, substringBounds[0], substringBounds[1]); 
              let leftChar = string[leftIdx]; 
              if (!(leftChar in targetCharCounts)) {
                  leftIdx++; 
                  continue; 
              }
              if (substringCharCounts[leftChar] === targetCharCounts[leftChar]) {
                  numUniqueCharsDone--; 
              }
              decreaseCharCount(leftChar, substringCharCounts)
              leftIdx++; 
          }
          rightIdx++; 
      }
      return substringBounds; 
  }
  
  function getCloserBounds(idx1, idx2, idx3, idx4) {
      return idx2 - idx1 < idx4 - idx3 ? [idx1, idx2] : [idx3, idx4];
  }
  
  function getStringFromBounds(string,bounds) {
      const [start, end] = bounds; 
      if (end === Infinity) return ''; 
      return string.slice(start, end + 1); 
  }
  
  // increasing our character count
  function increaseCharCount(char, charCounts) {
      charCounts[char] = (charCounts[char] || 0) + 1; 
  }
  
  // decreasing our character count
  function decreaseCharCount(char, charCounts) {
      charCounts[char]--; 
  }
  
  function maxProfitWithKTransactions(prices, k) {
	// O(nk) time | O(nk) space
	// prices; are our prices of stock 
	// k; are out transactions
	if (!prices.length) return 0; 
	// Create a 2D array.
	const profits = []; 
	for (let t = 0; t < k + 1; t++) {
		// placeholder of 0 to help build out our array by filling first row with zero
		const row =  Array.from({length: prices.length}, () => 0); 
		profits.push(row); 
	}
	for (let t = 1; t < k + 1; t++) {
		// initialize an arbitrary placeholder store w/ -Infinity so for our first comparison -Infinity will always be smaller 
		let maxThusFar = -Infinity; 
		for (let d = 1; d < prices.length; d++) {
			maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]); 
			profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d])
		}
	}
	return profits[k][prices.length - 1]; 
}

// more optimal approach
function maxProfitWithKTransactions(prices, k) {
    // O(nk) | O(n) space
      if (!prices.length) return 0; 
      // by implementing two rows we can swap 
      const evenProfits = Array.from({length: prices.length}, () => 0);
      const oddProfits = Array.from({length: prices.length}, () => 0); 
      for (let t = 1; t < k + 1; t++) {
          let maxThusFar = -Infinity; 
          let currentProfits, previousProfits; 
          // if we are dealing with an odd # of transactions
          if (t % 2 === 1) {
              currentProfits = oddProfits; 
              previousProfits = evenProfits; 
          } else {
              currentProfits = evenProfits; 
              previousProfits = oddProfits; 
          }
          console.log('odd # transactions:', oddProfits)
          for (let d = 1; d < prices.length; d++) {
              maxThusFar = Math.max(maxThusFar, previousProfits[d - 1] - prices[d - 1]); 
              currentProfits[d] = Math.max(currentProfits[d - 1], maxThusFar + prices[d]);
          }
      }
      return k % 2 === 0 ? evenProfits[prices.length - 1] : oddProfits[prices.length - 1]; 
  }
  

  var maxProfit = function(prices) {
    let maxProfit = 0; 
    let lowestPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]
        lowestPrice = Math.min(lowestPrice, price);
        maxProfit = Math.max(maxProfit, price - lowestPrice); 
    }
    return maxProfit; 
};

function maxProduct(nums) {
    let minThusFar = nums[0];  
    let maxThusFar = nums[0]; 
    let max = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]; 
        let maxTemp = maxThusFar; 
        maxThusFar = Math.max(num, num * minThusFar, num * maxThusFar); 
        minThusFar = Math.min(num, num * minThusFar, num * maxTemp); 
        max = Math.max(max, maxThusFar)
    }
    return max;   
};


function waterArea(heights) {
    // Write your code here.
      const maxes = Array.from({length: heights.length }, () => 0); 
      let leftMax = 0; 
      for (let i = 0; i < heights.length; i++) {
          const height = heights[i]; 
          maxes[i] = leftMax; 
          leftMax = Math.max(leftMax, height)
      }
      let rightMax = 0; 
      for (let i = heights.length - 1; i >= 0; i--) {
          const height = heights[i]; 
          const minHeight = Math.min(rightMax, maxes[i]); 
          if (height < minHeight) {
              maxes[i] = minHeight - height;
          } else {
              maxes[i] = 0; 
          }
          rightMax = Math.max(rightMax, height); 
      }
      return maxes.reduce((a, b) => a + b, 0); 
  }


  function waterArea(heights) {
    // Write your code here.
      let leftIdx = 0;
      let rightIdx = heights.length - 1;
      let leftMax = heights[leftIdx]; 
      let rightMax = heights[rightIdx]; 
      let surfaceArea = 0; 
      
      while (leftIdx < rightIdx) {
          if (heights[leftIdx] < heights[rightIdx]) {
              leftIdx++; 
              leftMax = Math.max(leftMax, heights[leftIdx]);
              surfaceArea += leftMax - heights[leftIdx]; 
          } else {
              rightIdx--; 
              rightMax = Math.max(rightMax, heights[rightIdx]);
              surfaceArea += rightMax - heights[rightIdx]; 
          }
      }
      return surfaceArea; 
  }
  
  function longestSubstringWithoutDuplication(string) {
    // Write your code here.
      const seen = {}; 
      let startIdx = 0; // Starting at index 0 we have no duplicate strings 
      let longest = [0, 1]; 
      for (let i = 0; i < string.length; i++) {
          const char = string[i];
          // IF the character already exist in string 
          if (char in seen) {
              // Set the startIdx to the index at the seen character plus 1
              startIdx = Math.max(startIdx, seen[char] + 1);
          }
          if (longest[1] - longest[0] < i + 1 - startIdx) {
              longest = [startIdx, i + 1];
          }
          seen[char] = i;
      }
      return string.slice(longest[0], longest[1]); 
  }

  function longestPalindromicSubstring(string) {
    // Write your code here.
      let currentLongest = [0, 1]; // initialize an array starting at 0 and 1 --> i + 1
      for (let i = 1; i < string.length; i++) {
          const odd = expandFromMiddle(string, i - 1, i); // a b a
          const even  = expandFromMiddle(string, i - 1, i + 1); // ab ba
          const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; 
          currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest
      }
      return string.slice(currentLongest[0], currentLongest[1]); 
  }
  
  
  function expandFromMiddle(string, leftIdx, rightIdx) {
      while (leftIdx >= 0 && rightIdx < string.length) {
          if (string[leftIdx] !== string[rightIdx]) break; 
          leftIdx--; 
          rightIdx++; 
      } 
      return [leftIdx + 1, rightIdx]; 
  }
  