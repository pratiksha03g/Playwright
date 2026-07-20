# JavaScript Keywords Notes

JavaScript keywords are reserved words that have special meaning in the language. They cannot be used as variable names, function names, or class names.

## 1) Main JavaScript Keywords

| Keyword | Meaning / Use | Comparison / Note |
|---|---|---|
| break | Stops a loop or switch | Used to exit immediately |
| case | Defines a matching case in switch | Works with switch |
| catch | Handles errors in try-catch | Runs when try throws an error |
| class | Defines a class | Blueprint for objects |
| const | Declares a constant | Cannot be reassigned |
| continue | Skips the current loop iteration | Goes to next iteration |
| debugger | Pauses code execution | Useful for debugging |
| default | Default case in switch | Runs when no case matches |
| delete | Removes a property from an object | Only works on object properties |
| do | Starts a do-while loop | Runs at least once |
| else | Runs when if condition is false | Used with if |
| export | Exports a value from a module | Used in ES modules |
| extends | Creates a subclass | Used in inheritance |
| false | Boolean false value | Opposite of true |
| finally | Runs code after try/catch | Used for cleanup |
| for | Creates a loop | Used for repeated iteration |
| function | Declares a function | Reusable block of code |
| if | Starts a conditional statement | Decision-making keyword |
| import | Imports values from a module | Used in ES modules |
| in | Checks if a property exists in an object | Example: `prop in obj` |
| instanceof | Checks object type | Example: `obj instanceof Array` |
| let | Declares a block-scoped variable | Can be changed later |
| new | Creates an object instance | Used with constructors |
| null | Represents no value | Intentional empty value |
| return | Returns a value from a function | Ends function execution |
| super | Calls parent class methods or constructor | Used in inheritance |
| switch | Chooses between multiple cases | Better than many if-else |
| this | Refers to the current object | Value depends on context |
| throw | Throws an error | Used for manual exceptions |
| true | Boolean true value | Opposite of false |
| try | Starts error-handling block | Paired with catch/finally |
| typeof | Returns the data type of a value | Example: `typeof x` |
| var | Declares a variable | Older keyword, function-scoped |
| void | Returns undefined | Often used as `void 0` |
| while | Repeats while a condition is true | Condition-based loop |
| with | Executes statements with an object | Deprecated, avoid using |
| yield | Pauses a generator function | Used with generators |
| await | Waits for a Promise | Only used inside async functions |

## 2) Additional Reserved Words in Modern JavaScript

These are special reserved words used in advanced or strict-mode contexts:

| Keyword | Purpose | Comparison / Note |
|---|---|---|
| static | Defines a static class member | Shared by the class, not instances |
| implements | Used in class/interface contexts | Mostly seen in TypeScript |
| interface | Declares an interface | Mostly seen in TypeScript |
| package | Reserved for future use in JS grammar | Not commonly used in normal JS |
| private | Restricts access to class members | Used in class-based OOP |
| protected | Restricts access in inheritance | Used in class-based OOP |
| public | Makes a class member accessible | Common in OOP-style syntax |

## 3) Simple Comparison

| Keyword | Compared with | Difference |
|---|---|---|
| let | const | `let` can be changed; `const` cannot |
| var | let | `var` is function-scoped; `let` is block-scoped |
| true | false | They are the two boolean values |
| break | continue | `break` stops loop; `continue` skips one step |
| try | throw | `try` handles errors; `throw` creates errors |
| export | import | `export` sends code out; `import` brings code in |

## 4) Important Note

A keyword is different from an identifier. Keywords are fixed by JavaScript syntax, while identifiers are names you create for variables, functions, and classes.
