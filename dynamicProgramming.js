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
  
  