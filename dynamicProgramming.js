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
  

  
  
  