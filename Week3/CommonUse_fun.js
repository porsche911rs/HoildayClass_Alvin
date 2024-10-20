const str = "A wonderful day~~";

console.log(str.length);
const Arr = ['a', 'b', 'c'];
console.log(Arr.length);

console.clear();

const strnum = '100';
const realNum = 100;
console.log(strnum + 3 + realNum); //1003100
console.log(strnum + (3 + realNum)); //100103

console.log(Number(strnum)); //number 100
console.log(+strnum); //number 100

console.log(typeof(realNum));  //string 100
console.log(typeof realNum.toString());  //string 100

let input = '500';
if(typeof input == 'string') input = +input;
console.log(100+input+100);