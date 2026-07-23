// Rule of Thumb: When comparing values, always use the strict equality operator (===) instead of the loose equality operator (==) to avoid unexpected type coercion and ensure accurate comparisons.
// == loose equality operator, it performs type coercion if the operands are of different types, which can lead to unexpected results.
// ==== strict equality operator, it checks for both value and type equality, ensuring that the operands are of the same type before making the comparison.


console.log(null == undefined); // true // loose equality operator, null and undefined are considered equal
console.log(null === undefined); // false
console.log(null == 0); // false // strict equality operator, null and 0 are not of the same type
console.log(null >= 0); // false // strict equality operator, null and 0 are not of the same type
console.log(null > 0); // false // strict equality operator, null and 0 are not of the same type
console.log(null == 0 || null > 0); // false // strict equality operator, null and 0 are not of the same type

console.log(NaN == NaN); // false // loose equality operator, NaN is not equal to itself
console.log(NaN === NaN); // false // strict equality operator, NaN is not equal to itself
console.log(0 == false); // true // loose equality operator, 0 is coerced to false
console.log(0 === false); // false // strict equality operator, 0 is not equal to false in type
console.log(1 == true); // true // loose equality operator, 1 is coerced to true

