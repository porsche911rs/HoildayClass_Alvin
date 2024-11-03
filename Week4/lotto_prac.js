let LottoPool=[]; 
const GetBall = []; //選中的球
for(let i=1; i<50; i++)
{
    LottoPool.push(`(${i})`);
}

const rand = (min, max) =>  //隨機整數選擇器
{
    return Math.floor(Math.random() * (max-min+1))+min;
}

/*Use array.filter */
for(let i=1; i<7; i++)
{
    //const FindIdx =  rand(0, LottoPool.length-1);//決定哪個序號，序號換球
    const FindBall = LottoPool[rand(0, LottoPool.length-1)];

    GetBall.push(FindBall);

    //清除球池指定球, ex:10, 利用filter不要的球回傳False
    LottoPool = LottoPool.filter(function(CheckBall)
    {
        //console.log(val, LottoPool[FindIdx], val !== LottoPool[FindIdx]);
        return CheckBall !== FindBall; 
    })
}

//console.log(FindBall.sort());

/*Use array.splice*/
let LottoMachine = new Array(49);
let LuckyPool = [];

for(let i=0; i<LottoMachine.length; i++)
{
    LottoMachine[i] = String(i+1).padStart(2, '0');
}
for(let i=0; i<6 ;i++)
{
    const FindIdx = rand(0, LottoPool.length-1);//決定哪個序號，序號換球

    //Solution 1, just get index 0, because splice always1 element
    //const GetArray = LottoMachine.splice(FindIdx, 1);
    //LuckyPool.push(GetArray[0]);
    
    //Solution 2
    const GetArray = LottoMachine.splice(FindIdx, 1);
    LuckyPool = LuckyPool.concat(LottoMachine.splice(FindIdx, 1));
}
console.log(LuckyPool, LottoMachine);