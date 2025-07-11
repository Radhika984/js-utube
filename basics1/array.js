const newarry=[2,3,4,5];
// 2nd way of intializing
const new1arry=new Array(2,3,4,5);

console.log(newarry[0]);
// array method
// kisi new element ko add krne k liye
newarry.push(6);

// to delete an element from an array
newarry.pop();
// to add an element at first
newarry.unshift(9);
// to delete the first element from an array
newarry.shift();
console.log(newarry);
// it gives the boolean whether it is present or not
console.log(newarry.includes(9));
console.log(newarry.indexOf(9));
// it chnages array to string
const new2arry=newarry.join();
// slice
console.log("A",new1arry);
const n1=new1arry.slice(1,3);
console.log(n1);

console.log("B",new1arry);
const n2=new1arry.splice(1,3);
console.log(n2);