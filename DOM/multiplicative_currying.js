// Multiplicative currying refers to the technique of using currying to create a chain of functions where each function takes a single argument and returns a function that can take another argument, ultimately multiplying all the values passed.
function mul(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  }
  
  console.log(mul(2)(3)(4)); // 24
//   How It Works:
// mul(2) returns a function that takes b.
// The function that takes b returns another function that takes c.
// The final function multiplies a, b, and c.
// In this example:

// mul(2) returns a function that takes b.
// mul(2)(3) returns a function that takes c.
// mul(2)(3)(4) finally calculates 2 * 3 * 4, resulting in 24.
// This is a practical example of how currying allows you to break down a function into a series of functions that can be called with one argument at a time.


// When Should You Use Multiplicative Currying?
// Multiplicative currying, specifically, is useful when you need to create a sequence of calculations (like multiplications) that can be applied incrementally. It allows for:

// Partial application: You can apply arguments gradually over time.
// Composable functions: You can create functions that can be reused in different contexts.
// Clean and readable code: Breaking down complex operations into smaller, manageable pieces.
// Use it in scenarios where your operations (like calculations, API calls, or UI event handling) need to be modular, reusable, and customizable with multiple parameters over time

function applyDiscount(price) {
    return function(discount) {
      return function(tax) {
        return price * (1 - discount) * (1 + tax);
      };
    };
  }
  
  // Usage:
  const finalPrice = applyDiscount(100)(0.1)(0.2); // Price: 100, 10% discount, 20% tax
  console.log(finalPrice); // 108

  