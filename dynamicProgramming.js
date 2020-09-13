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
  