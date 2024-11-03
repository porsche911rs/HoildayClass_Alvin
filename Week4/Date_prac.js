//Date物件中月份索引值，是從0~11(1~12月)
const Time = Date();
const Now = new Date();
const LastTime1 = new Date(2024, 11, 31, 23, 59, 59, 999);
const LastTime2 = new Date('2024-12-31T23:59:59:999');

const MonthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ' Nov', 'Dec'];
const DayStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

let ans = null;
ans = Now.getFullYear(); //西元年
ans = MonthStr[Now.getMonth()]; //月份
ans = Now.getDate(); 
ans = Now.getHours(); 
ans = Now.getSeconds(); 
ans = Now.getMilliseconds(); 
ans = DayStr[Now.getDay()]; //星期幾(0~6對應星一到星日)
//console.log(ans);

/*練習計算跨年倒數日時分秒，利用GetTime相差毫秒推算月日時分秒*/
let CurrentYear = Now.getFullYear();
const YearFinalTime = new Date(CurrentYear, 11, 31, 23, 59, 59, 999);
let DiffTime = LastTime1.getTime() - Now.getTime();
let Day = 0, Hours = 0, Minute = 0, Second = 0;

DiffTime = Math.floor(DiffTime / 1000); //總秒數

Day = Math.floor(Math.floor(Math.floor(DiffTime / 60) / 60) / 24);
Hours = Math.floor(Math.floor(DiffTime / 60) / 60) % 24;
Minute = Math.floor(DiffTime / 60) % 60;
Second = DiffTime % 60;
console.log(`距離${CurrentYear+1}年，剩${Day}天${Hours}時${Minute}分${Second}秒`);

/*------------------------------------------------------------------------------- */
console.clear();
const NowTime = new Date();

console.log(NowTime);
NowTime.setDate(NowTime.getDate()+100);
console.log(NowTime);
NowTime.setDate(NowTime.getDate()-200);
console.log(NowTime);