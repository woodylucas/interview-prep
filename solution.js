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