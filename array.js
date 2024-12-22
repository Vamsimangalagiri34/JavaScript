var car=["vamsi","gowtham","saiteja","chakradhar"];
document.write("<h1>"+car+"</h1>");
car.push("ram");
car.pop()
for(var i=0;i<car.length;i++){
    document.write(car[i]+"<br>");
}
var arr=new Array("abs","bds");
document.write(arr)
//array location starts from 0 because computer memeory start from or the starting element distance  is 0 
//inex it gives location of a value within the array 
const arr2=['d','fg','rg','rg'];
console.log(arr2,arr2[3])
//methods
arr2.push('vamsi','ram');//adds the element at end of the array we can add any noof elements
arr2.unshift('mangalagiri','soba');//add element at first
//console.log(arr2.shift()); it will return the removed element
console.log(arr2);
//slice it return the portion of array if we give out of range it will gives all the elements
console.log(arr2.slice(0,33));
console.log(arr2.slice());//it will return the all elements
console.log(arr2.indexOf('rg'),arr2.length);
//sum of elements in array
ry=[3,5,6,7,78,58];
sum=0
for(let k of ry){
    sum=sum+k;
}
console.log(sum);
