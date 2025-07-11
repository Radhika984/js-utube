// objects literals
// symbol define krdiya
const mysymb=Symbol("key1")
const a={
    name:"Hitesh",
    age:18,
    // symbol lo define krne ka traeeka
    [mysymb]:"mykey1",
    location:"Jaipur",
    email:"hitesh@gmail.com",
}
console.log(a.name)
// another way of initialization
console.log(a["name"])
a.email="radhika.34@kiet.edu"
// value chnge n ho
Object.freeze(a)
a.email="hitesh.78@google.com"
console.log(a)
a.greeting=function(){
    console.log("Hello js user")
}
a.greetingtwo=function(){
    console.log(`my name is,${this.name}`);
}
console.log(a.greeting)