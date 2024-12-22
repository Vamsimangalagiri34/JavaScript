console.log('f'-3)//NaN

console.log(3+'st') //3st

const x=()=>{
    return 34;
}

console.log(x()) //34

console.log(x)  // [Function: x]


var n=90;
console.log(n) //90

function def(){
    console.log(n)  //undefined
    var n=4;
}

def()

console.log(n)  //90

let l=34 

function greet(){
  let l=89
  console.log(l) 
}

greet()  //89



for(let i=0;i<10;i++){
    temp+=i
}

var temp; 

console.log(temp) //NaN

var temp2=0;
for(var i=0;i<10;i++){
    temp2+=i 
}
console.log(temp2) //45

console.log('2'+2+'2') //222

console.log('2'-'1') //1

console.log('2'-'5'*'4') //-18 

console.log('7'*'7') //49

console.log({}) //{}

const obj={}

console.log(obj) // {} 

const obj2={
    name:'vamsi',
    village:'sobbala'
}

console.log(obj2)  // { name: 'vamsi', village: 'sobbala' }

const objk={
       name:['a','b','c','d','e']
}

console.log(objk.name)  //[ 'a', 'b', 'c', 'd', 'e' ] 

console.log(typeof objk.name) //object 

console.log(0==false) //true
console.log( false===0) //false
console.log(NaN==NaN)//false 

// NaN == NaN results in false.
// NaN is considered unequal to any value, including itself.
// You can use the function isNaN() to check if a value is NaN.


console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

l=[1,2,3,4,5,6]
result=l.map((ele)=>  ele*2) //[ 2, 4, 6, 8, 10, 12 ]
result=l.map((ele)=> { return ele*2}) //[ undefined, undefined, undefined, undefined, undefined, undefined ]

// Implicit return (without {}): returns the evaluated expression automatically.
// Explicit return (with {}): requires a return statement to return a value. If there is no return, the function returns undefined.

console.log(result)

result=l.map((ele)=> ele>2) 

console.log(result)  //[ false, false, true, true, true, true ]

result=l.filter((ele)=> ele>3)
console.log(result)  //[ 4, 5, 6 ]

result =l.filter((ele)=>ele*2)
console.log(result)


// 0 * 2 is 0 (falsy) → NOT included.
// 1 * 2 is 2 (truthy) → included.
// 2 * 2 is 4 (truthy) → included.
// 3 * 2 is 6 (truthy) → included.
// 4 * 2 is 8 (truthy) → included.
// 5 * 2 is 10 (truthy) → included.
// So the final output is [1, 2, 3, 4, 5].

// Summary:
// The filter method requires a function that returns a boolean value. If you use a non-boolean operation (like ele * 2), it uses truthiness to determine whether to include the element.
// If element ele is 0, it won't be included in the resultant array.

result=l.reduce((acc,cur)=>{
    return acc<cur
})

console.log(result) //true


result = l.reduce((acc, cur) => {
    return acc > cur ? acc : cur;  // Accumulate maximum value
});

console.log(result); // Output: 6



// If l is [1, 5, 3, 9, 2], the first comparison looks like this:
// For the first elements, acc will be 1 (the first item) and cur will be 5. Since 1 < 5 evaluates to true, but there's no accumulation, the process continues.


var lo=[45,6,3,6355,24]

lo.sort()

console.log(lo)

console.log(bg) //throws an erroe  // ReferenceError: Cannot access 'b' before initialization
var bg=34; //hosting will be happend for var only let and const cont process with it 
console.log(bg) 

// js is a single thread 
console.log('-------------------------')
console.log(abc())
// First Call (console.log(abc())):

// The function abc is called, which logs 'pqr' to the console.
// After executing the console.log inside abc, the function abc does not explicitly return a value. In JavaScript, if a function does not return anything, it implicitly returns undefined.
// Therefore, console.log(abc()) will output pqr followed by undefined.
// Second Call (abc()):

// The function abc is called again, and it logs 'pqr' to the console one more time.
function abc(){
    console.log('pqr')
}

abc()


var rist=[1,2,3,4,5,6,7]

console.log(rist)  //[
//     1, 2, 3, 4,
//     5, 6, 7
//   ]

console.log(rist.splice(0,3))//[ 1, 2, 3 ]

console.log(rist) //[ 4, 5, 6, 7 ]

console.log(rist.slice(0,5)) 

 //splice will change the existing array but list not

// splice modifies the original array by adding, removing, or replacing elements.
// slice creates a new array without modifying the original array.
// Return Value:

// splice returns an array containing the deleted elements.
// slice returns a new array containing the extracted elements.
// Parameters:

// splice takes parameters for starting index, number of elements to remove, and elements to add.
// slice takes parameters for starting and ending indices.

// array.splice(start, deleteCount, item1, item2, ...) elements are going to item1,item2 are add  and return the removed elements
// array.slice(start, end) //it gives the new extracted part form the list


var obi={
 name:'vamsi'
}
var obi2=obi //object reference was copied so if we change any in obi it will get effect to obi2

obi.name='rebel' //this is know as shallow copy 

console.log(obi2.name)


var a=45
var b=a //deep copy 
a=78
console.log(b)
console.log('------------')


{ //block scope 
    function xyz(){
        console.log('from inside block') //var and functions can hosit
    }
}

xyz() //from inside block function can be hosited

function demo(){
//   'use strict'  //-> ReferenceError
    fo=2939 //fo is not defined throws an error like when we use strict the variable must defind with a keyword likevar,const let if not throw an error 
    fp=44 //if we not use use strict and any key words it will under the window scope  .will create a global variable if 'use strict' is not active
    console.log(fo+fp)
}
demo()

console.log(fp)

// when you declare a variable in JavaScript without using var, let, or const, it automatically becomes a property of the global object. 
// In a browser environment, this global object is the window object. This means the variable is stored in the window scope and can be accessed globally from anywhere in your code.
