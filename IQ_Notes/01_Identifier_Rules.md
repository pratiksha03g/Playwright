# JavaScript Identifier Rules

An identifier is the name given to variables, functions, classes, or other user-defined entities in JavaScript.

## Rules for Creating Identifiers

1. An identifier can contain letters, digits, underscores, and dollar signs.
2. It must start with a letter, underscore (_), or dollar sign ($).
3. It cannot start with a digit.
4. JavaScript is case-sensitive, so `Name` and `name` are different.
5. Keywords cannot be used as identifiers.
6. Identifiers cannot contain spaces.
7. Identifiers should be meaningful and descriptive.
8. You should avoid using reserved words like `class`, `function`, `let`, `const`, `if`, etc.

## Examples of Valid Identifiers

- `name`
- `userName`
- `_count`
- `$price`
- `totalAmount`

## Examples of Invalid Identifiers

- `1name`  -> starts with a digit
- `my name` -> contains a space
- `class` -> reserved keyword
- `a-b` -> hyphen is not allowed

## Important Notes

- `let`, `const`, and `var` are used to declare variables.
- Good identifier naming improves code readability.
- Use camelCase for variables and functions in JavaScript.

## Example

```javascript
let userName = "John";
const totalAmount = 100;
function calculatePrice() {
  return totalAmount + 50;
}
```
