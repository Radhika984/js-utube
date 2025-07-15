// filters for intializing nd traversal of arrays
const mynums=[1,2,3,4,5]
// ek condition banatani pdti h 
const newnums=mynums.filter((num)=>num>4)
console.log(newnums);
// map m 
const mynums1=[1,2,3,4,5,6,8]
const newnums1=mynums1.map((num)=>{return num+10})
console.log(newnums1)
// ab map m map chaining
const a=mynums1.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)

const mynums2=[1,2,3]
const mytotal=mynums2.reduce(function(acc,currval){
    return acc+currval
},0)
console.log(mytotal)
