# Code Challenge Solutions

This repository contains solutions to coding challenges in JavaScript and UI design.

## 1. UI Challenge: Interactive Photo Gallery

### Description

Implement an interactive photo gallery based on the provided Figma designs.

### Requirements

- Responsive design for both desktop and mobile devices.
- Features such as image thumbnail navigation and full-size image viewing.
- Implement any interactions specified in the designs.

## 2. Coding Challenge 1: Array Manipulation

### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

### Example

Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.

### Constraints

- Array length: 1 to 100,000 elements
- Element values and target sum: between -1,000,000,000 and 1,000,000,000
- Time Complexity: O(n), where n is the array length
- Space Complexity: O(1)

## 3. Coding Challenge 2: String Transformation

### Problem Statement

Given a string, transform it based on certain rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5, perform both operations in the specified order.

### Examples

- Input: "Hamburger"
  Output: "regrubmaH" (reversed)
- Input: "Pizza"
  Output: "80 105 122 122 97" (ASCII codes)
- Input: "Chocolate Chip Cookie"
  Output: "eikooCpihCetalocohC" (reversed)

### Constraints

- String length: 1 to 1000
- Alphanumeric characters and spaces only
- Time Complexity: O(n), where n is the string length
- Space Complexity: O(n)
