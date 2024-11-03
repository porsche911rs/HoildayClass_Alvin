setInterval(()=> 
{
    const Now = new Date();
    const LastTime1 = new Date(2024, 11, 31, 23, 59, 59, 999);

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
});