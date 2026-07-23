// Rule of Thump: When comparing values, always use the strict equality operator (===) instead of the loose equality operator (==) to avoid unexpected type coercion and ensure accurate comparisons.
// == loose equality operator, it performs type coercion if the operands are of different types, which can lead to unexpected results.
// ==== strict equality operator, it checks for both value and type equality, ensuring that the operands are of the same type before making the comparison.


console.log("" == 0); // true // loose equality operator, empty string is coerced to 0
console.log("" === 0); // false // strict equality operator, empty string is not equal to 0 in type

console.log("0" == 0); // true // loose equality operator, string "0" is coerced to number 0
console.log("0" === 0); // false // strict equality operator, string "0" is not equal to number 0 in type

console.log("" == "0"); // false // loose equality operator, empty string is not equal to string "0"
console.log("" === "0"); // false // strict equality operator, empty string is not equal to string "0" in type  
