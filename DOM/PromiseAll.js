// Promise.all() in JavaScript
// The Promise.all() method is used to execute multiple promises concurrently. It returns a single promise that resolves when all the input promises are resolved or rejects if any one of the promises is rejected.


// Promise.all() in JavaScript
// The Promise.all() method is used to execute multiple promises concurrently. It returns a single promise that resolves when all the input promises are resolved or rejects if any one of the promises is rejected.

Syntax:
// javascript
// Copy code
// Promise.all(iterable);
// iterable: An array (or any iterable object) of promises or values.
// How It Works:
// If all promises are resolved, Promise.all() returns a single promise resolved with an array of results (in the same order as the input promises).
// If any promise is rejected, Promise.all() immediately rejects with the reason of the first rejected promise.


const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // Output: [10, 20, 30]
    })
    .catch((error) => {
        console.error(error);
    });
