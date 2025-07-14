const username="hotesh"
if(username){
    console.log("true")
}else{
    console.log("false")
}
// falsy values
// kin kin cheezon m ye false hoga
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy Value"0",'false'," ",[],{},function(){}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
console.log("Object is empty")
}
// Nullish coalescing operator(??):null defined
let val1;
val1=5??10;
val1=null??10;
val1=undefined??15
val1=null??10??20;
console.log(val1);

// ternary alg h ?: