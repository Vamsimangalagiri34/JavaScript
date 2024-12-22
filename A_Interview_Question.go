What is JavaScript?

JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for creating interactive effects within web browsers. It allows developers to make web pages more dynamic, interactive, and responsive, offering client-side scripting without requiring the page to reload. JavaScript is also used for server-side programming through environments like Node.js.
Node.js Sample Code

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, used to run JavaScript on the server side. The sample code for Node.js typically includes creating a web server using the http module, responding to client requests, and handling basic operations like listening on a port.
JS is a programming language for the web, used to create dynamic, interactive, and animated websites without reloading the page

JavaScript is used to create web pages that are not static, meaning their content can change in response to user interaction, such as clicking buttons, entering data, or making requests to a server. This is achieved through client-side scripting and allows for dynamic changes without reloading the page (using techniques like AJAX).
How to Insert JS Code in HTML (Different Ways)

JavaScript can be included in HTML in several ways:
Inline using the onclick attribute or other event handlers.
Internal within a <script> tag in the HTML file, usually placed at the end of the <body> tag or within the <head> tag.
External by linking to a separate JavaScript file using the <script src="filename.js"></script> tag.
Difference between var, let, and const in JavaScript

var: Function-scoped or globally scoped, and allows variable redeclaration.
let: Block-scoped and cannot be redeclared within the same scope.
const: Block-scoped and creates a constant that cannot be reassigned.
Function-scoped vs Block-scoped

Function-scoped: Variables declared with var are available within the entire function or globally if declared outside a function.
Block-scoped: Variables declared with let and const are available only within the block they are defined in (e.g., within loops, if statements, etc.).
JavaScript Comments

Comments are non-executable lines of code used to explain or annotate the code.
Single-line comments are written using //.
Multi-line comments are enclosed in /* */.
JavaScript Operators (all types)

Operators are symbols used to perform operations on variables and values. Some of the key types of operators include:
Arithmetic Operators (+, -, *, /, %, ++, --).
Assignment Operators (=, +=, -=, *=, /=, %=).
Comparison Operators (==, ===, !=, !==, >, <, >=, <=).
Logical Operators (&&, ||, !).
Bitwise Operators (&, |, ^, ~, <<, >>, >>>).
Ternary Operator (condition ? expr1 : expr2).
Type Operators (typeof, instanceof).
Data Types in JavaScript

JavaScript has several built-in data types:
Primitive types: String, Number, BigInt, Boolean, Symbol, undefined, null.
Reference types: Object, Array, Function, Date, etc.
Difference between null and undefined

undefined: A variable that has been declared but not assigned a value is undefined.
null: It is an intentional assignment of no value or an empty object reference.
Where do we use Symbols in JavaScript?

undefined is the default value for variables that are declared but not initialized.
null is explicitly assigned to a variable to indicate that it has no value or is intentionally empty.

Symbols are used for creating unique, immutable values that can serve as object property keys. They help prevent naming conflicts in large applications or libraries and can also simulate private properties in objects.
JavaScript Symbols Use Cases

Unique Object Property Keys: To avoid key conflicts when using objects.
Object Methods with Symbol Keys: For defining unique methods on objects.
Private Object Properties: To create properties that aren't easily accessed or modified.
Meta-Programming: JavaScript uses symbols internally, like Symbol.iterator for iteration.
Preventing Property Name Collisions: Symbols help prevent conflicts when developing large applications, especially when interacting with external libraries.


JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

function myFunction(p1, p2) {
	return p1 * p2;
  }

  Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.


