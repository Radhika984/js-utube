const heroes=["thor","ironman","spiderman"];
const dc=["superman","flash"];
const all=heroes.concat(dc);
console.log(heroes);
// new way to concatenate
const allnewheroes=[...heroes,...dc];
const ne1=[1,2,3[5,6[7,89,7]]];
const real_another=ne1.flat(Infinity);
console.log(real_another)
// questionally for array
console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"}));
let score1=100;
let score2=300;
console.log(Array.of(score1,score2))