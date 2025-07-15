// for loop

for(let index=0;index<10;index++){
    const element=index;
    console.log(element)
}
for(let index=1;index<=20;index++){
    if(index==5){
        console.log(`Dected 5`);
        break;
        // whole loop is ignored continue mean a singvle iteration is ignored
    }
    console.log(`value of i is ${index}`);
}

// while loop
let index=0;
while(index<=10){
    console.log(`Value of index is ${index}`);
    index=index+2;
}
let myarray=['flash','batman','superman']
let arr=0;
while(arr<myarray.length){
    console.log(`Value is ${myarray[arr]}`);
    arr=arr+1;
}
// do while
let score=1;
do{
console.log(`Score is ${score}`);
score++;
}while(score<=10);

// for of loop
// ye mostly array pr lgte h 
const arr1=[1,2,3,4,5,6]
for(const num of arr1){
    console.log(num);
}
// Maps
const map=new Map()
map.set('IN',"India")
// maps ko iterate krane ki cheez
for(const[ key ,value ]of map){
    console.log(key,':-',value);
}
// for objects ndvarious thighs -
const a={
    rb:"ruby",
    cpp:"c++",
}
for(const key in a){
console.log(a[key]);
}
// ye loop array pr bhi applicable h 

const coding=["js","ruby","java","python"]
// phle likhne k tareeka
// coding.forEach(function(val){
// console.log(val);
// })
coding.forEach((item)=>{
    console.log(item);
})
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})