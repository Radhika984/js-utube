let mydate=new Date();
console.log(mydate.toJSON())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString());
console.log(typeof mydate)
let createdate =new Date(2023,0,23)
let createdate =new Date(2023,0,23,5,3)
let createdate =new Date("2023-01-14")
let mycreatedate=new Date("01-14-2023")
console.log(mycreatedate.toLocaleString());
let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(mytimestamp.getTime());
console.log(Math.floor(Date.now()/1000))
let new1date=new Date()
console.log(new1date);
console.log(new1date.getMonth()+1);
console.log(new1date.getDay());
new1date.toLocaleString('default',{
    weekday:"long",
})