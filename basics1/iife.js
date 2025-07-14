// IIFE-GLOBAL scope k excuted m prblem hoti h isliye kbhi kbhi iife bana dete h- ()()

(function chai(){
console.log(`DB CONNECTED`);
})();
// do iife
((name)=>{
console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')