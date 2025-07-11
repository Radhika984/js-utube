const score=899.9876;
console.log(score)
// its just spcecially signify kiya h number h 
const newnumber=new Number(100);
console.log(newnumber.toString().length);
// decimal k baad kitne points tk chhaiye
console.log(newnumber.toFixed(1));
// precision kitne digit ko round off krke likha n 
console.log(score.toPrecision(3))
const hundred=100000000;
console.log(hundred.toLocaleString('en-IN'))


// ab math ki properties
console.log(Math.abs(-9));
console.log(Math.ceil(4.2));
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));
console.log(Math.random());
// it given value btw 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const othernumber=123.8966
console.log(Math.floor(Math.random()*(max-min+1))+min)