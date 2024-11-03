/*
console.log(Math.round(3.56)); //四捨五入
console.log(Math.ceil(3.56));  //無條件進位
console.log(Math.floor(3.9));  //無條件捨去
console.clear();

console.log(Math.pow(5));
console.log(Math.random()); //提供介於0(包含)~1(不包含) 之間的浮點數
*/

/*let num = Math.random();
num *=10;
num = Math.floor(num);
*/
/*for(let i=0; i<10; i++)
{
    console.log(Math.floor(Math.random() * 10));
}*/

//ex: 0~15 
let Ran0to15 = Math.floor(Math.random()*16);

//Quiz: 45~80隨機整數
//等同0~35隨機數+45
/*let Result = Math.random();
Result = (Math.floor(Result *= 35))+45;
console.log(Result);*/

function rand(Min, Max)
{
    let Output_Ans = Math.random();
    if(Min > Max)
    {
        console.log('Error parameter');
        return 0;
    }
    Output_Ans = Math.floor(Output_Ans *= ((Max-Min)+1)+Min);
    //console.log(Output_Ans);
    return Output_Ans;
}
/*const rand = (Min, Max) =>
{
    let Output_Ans = Math.random();
    Output_Ans = Math.floor(Output_Ans *= ((Max-Min)+1)+Min);
    return Output_Ans;
}*/

const arr = new Array(10);
for(let i=0; i<arr.length; i++)
{
    arr[i] = rand(45,80);
    console.log(arr[i]);
    console.log("Arr Length:"+arr.length);
}

//method3 
const fakeArr = arr.apply(null, new Array(10)).map((i)=> rand(45,80));
console.log(fakeArr);
//Quiz: 產生6個數字1~49
