// Define a person object
const person = {
    firstName: "John",
    lastName: "Doe",
};

// Function to greet a person
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

// --- Using `call` ---
// With `call`, arguments are passed individually
greet.call(person, "Hello", "!");
//greet(person,'hello')
// Output: "Hello, John Doe!"

// --- Using `apply` ---
// With `apply`, arguments are passed as an array
greet.apply(person, ["Hi", "?"]);
// Output: "Hi, John Doe?"

// --- Using `bind` ---
// With `bind`, we create a new function with a fixed `this` context
const greetJohn = greet.bind(person, "Hey");
greetJohn("!");  // Later invocation with additional arguments
// Output: "Hey, John Doe!"

// Function Borrowing: call and apply are used when you want an object to "borrow" a method from another object. For instance, if you have a method in one object and want to use it on another object, you can apply the method to the second object using call or apply.

// Controlling the Function Execution: Sometimes you want to delay the execution of a function (e.g., in setTimeout or event handling). bind allows you to control when and how the function is executed by creating a new function that remembers the context.