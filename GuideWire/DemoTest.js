// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**
 * input = Array of Integers
 * Output = return the smallest positive integer that does not occur in A
 * Constraints = can use any general libraries. N is anywhere from 1 to 100,000.
 * Each element within A can be positive or negative.
 *
 * Given A = [1, 2, 3], the function should return 4.
 *
 * Given A = [-1, -3], the function should return 1.
 */

/** process
 *is there a method or function that helps weed out the negatives and positives? Filter.

 If all negatives, or empty array return 1.
  if all positives, return the smallest positive integer.

 algo start
  filter the array and only return positives from it.
 if new array is empty, then there are no positives or it is empty. return 1.

with new filter array, we need to find the smallest integer and incrementally check if one above it exists in the positive array.
 if smallest number+1 is present in positive array,
 change smallest number to smallest number+1 and check again.
 if smallest number+1 is not present in the positive array. Return smallest number+1
 */

function solution(A) {
  var inputCheck = Array.isArray(A);
  var positiveArray = A.filter((number) => Math.sign(number) == 1);
  var smallest = 1;

  if (positiveArray.length === 0 || A.length === 0 || !inputCheck) {
    return 1;
  }

  while (true) {
    if (positiveArray.indexOf(smallest) == -1) {
      return smallest;
    } else {
      smallest++;
    }
  }
}

/**Test Cases in Demo */

/**
 * Example test:   [1, 3, 6, 4, 1, 2]
OK

Example test:   [1, 2, 3]
OK

Example test:   [-1, -3]
OK

Test case I added myself:

[]
assumption I made is to return 1. And if the input is not an array at all, return 1.
 */
