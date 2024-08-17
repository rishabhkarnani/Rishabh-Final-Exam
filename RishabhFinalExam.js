/* 
Question1: Reverse an Integer (5 MARKS)
Given an integer x, return the integer obtained by reversing the digits
of x.
If its a negative number , the sign should preserve
Test Case 1: Positive Number
● Input: x = 123
● Expected Output: 321
● Explanation: The digits of 123 are reversed to 321.
Test Case 2: Negative Number
● Input: x = -456
● Expected Output: -654
● Explanation: The digits of -456 are reversed to -654, with the
negative sign preserved.
*/

function reverseRishabh(x) {
    // Convert integer to a string 
    // Split it into an array of characters
    const str = x.toString().split('');
    
    // Check if the number is negative
    let isNegative = false;
    if (str[0] === '-') {   // To double check the data type as well as the values
        isNegative = true;

    // Remove negative sign
        str.shift();         
    }
    
    // Reverse the array 
    const reversedStr = str.reverse().join('');
    
    // Convert the reversed string to a number
    const reversedNumber = parseInt(reversedStr, 10);
    
    // If the original number was negative
    // Return the negative of the reversed number
    return isNegative ? -reversedNumber : reversedNumber;
}

// Test cases
console.log(reverseRishabh(123));   
console.log(reverseRishabh(-456));  


/*
Question 2: Given a sorted array of distinct integers and a target
value, return the index if the target is found. If not, return the index
where it would be if it were inserted in order.( 5 MARKS)
Test Case 1: Target is in the array
● Input: nums = [1, 3, 5, 6], target = 5
● Expected Output: 2
● Explanation: The target 5 is found at index 2.
Test Case 2: Target is not in the array (insert position in
between)
● Input: nums = [1, 3, 5, 6], target = 2
● Expected Output: 1
● Explanation: The target 2 is not found, but it would be inserted
at index 1.
*/

function lookInsert(nums, target) {
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Check if target is found or it needs to be inserted
        if (nums[i] >= target) {
            return i; // Return the index
        }
    }
    return nums.length; // Insert at the last
}

// Test cases
console.log(lookInsert([1, 3, 5, 6], 5)); 
console.log(lookInsert([1, 3, 5, 6], 2));


/*
Question3: Delete Node in a Linked List (5 MARKS)
Write a function to delete a node (except the tail) in a singly
linked list, given only access to that node.
Test Case 1: Basic Deletion
● Input:
○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
○ Node to delete: 5
● Output:
○ Linked List: 4, where linked list should become 4 -> 1 -> 9
Test Case 2: Basic Deletion
● Input:
○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
○ Node to delete: 4
● Output:
○ Linked List: 5, where linked list should become 5 -> 1 -> 9
*/

// Function to delete a node in a singly linked list
function delNode(node) {
    node.val = node.next.val; 
    node.next = node.next.next; // Skip the next node
}

// Define the linked list nodes
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create the linked list 4 -> 5 -> 1 -> 9
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);


/*
Question4: Find all the duplicates in an array and return which
is the smallest one. (5 MARKS)
Test Case 1:
Input:
○ Given array: [4, 10, 5, 1, 11, 5, 1, 4, 1]
● Output:
○ 1
Test Case 2:
Input:
○ Given array: [1, 10, 1, -1, 10, -1]
● Output:
○ -1
*/

function findSmallestDup(arr) {
    let duplicates = new Set();
    let smallestDuplicate = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (duplicates.has(arr[i])) {
            // If the element is already a duplicate, update the smallestDuplicate
            if (arr[i] < smallestDuplicate) {
                smallestDuplicate = arr[i];
            }
        } else {
            // Otherwise, add it to the set of duplicates
            duplicates.add(arr[i]);
        }
    }

    return smallestDuplicate;
}

// Test Cases:
const testCase1 = [4, 10, 5, 1, 11, 5, 1, 4, 1];
console.log(findSmallestDup(testCase1)); 

const testCase2 = [1, 10, 1, -1, 10, -1];
console.log(findSmallestDup(testCase2));


/* MULTIPLE CHOICE QUESTIONS (Each 2 Marks)

Which type of search is efficient on a sorted array?
● A) Linear Search
● B) Binary Search 
● C) Hash Search
● D) Exponential Search
// Your answer: Binary Search
*/

/*
What is the time complexity of inserting a new node at the
beginning of a singly linked list?
● A) O(1) 
● B) O(n)
● C) O(log n)
● D) O(n log n)
// Your answer: O(1)
*/

/*
In a binary search tree (BST), the left child of a node is always:
● A) Greater than the node
● B) Smaller than the node
● C) Equal to the node
● D) Random compared to the node
// Your answer: Smaller than the node
*/

/*
Which traversal of a BST visits nodes in ascending order?
● A) Pre-order
● B) Post-order
● C) In-order 
● D) Level-order
// Your answer: In-order
*/

/*
In a doubly linked list, what does the prev pointer in the first
node point to?
● A) The last node
● B) Null
● C) The second node
● D) The middle node
// Your answer: Null
*/








