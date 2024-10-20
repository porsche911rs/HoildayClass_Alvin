let ary = [1,2,3];

//method1
function ShowMSG(Val,idx)
{
     //console.log('Hello');
   console.log(`index => ${idx}, Value => ${Val}`);
}
ary.forEach(ShowMSG); //forEach-->希望提供一個function,他試著提供參數給你的function

//method2
ary.forEach(function(Val,idx)
{
    console.log(`index => ${idx}, value => ${Val}`);
});

//method3
ary.forEach((Val, idx) => console.log(`index=> ${idx}, value => ${Val}`));

console.clear();

for(const item of ary)
{
    console.log(item);
}
console.clear();

//filter: 保留return true,不要的return false
//對陣列移除指令元素，可以用filter弄出新陣列在指定給自己
ary = ary.filter((Val) => Val !== 'A9');
console.clear();

//map映射，抽與每個元素特定處理放回原位置
lokiTest = ary.map((Val) => Val + '~~');

let input = 300;
if(typeof input == 'string') imput = +input;
console.log(100+input+100);
