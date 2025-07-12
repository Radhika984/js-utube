// jo user ayegfa ko dikhne k liye ek emssage this keyword k through
const user={
    username:"Radhika",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this)
// arrow function declaration
const chai=()=>{
    let username="hitesh"
    console.log(this)
}
chai()

const addtwo=(num1,num2)=>{
    return num1+num2
}
// parathnesiis lgane m return krna hoga bina paranthesis k return nhi krna hota h 
const addtwo2=(num1,num2)=>({username:"Hitesh"})
console.log(addtwo2(2,3))