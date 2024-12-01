/******Define Button Keycode *********/
const Key1 = 103, Key2 = 104, Key3 = 105, 
      Key4 = 100, Key5 = 101, Key6 = 102, 
      Key7 = 97,  Key8 = 98,  Key9 = 99 ;
/*********************************** */
//Define global variable
const BtnStart=document.querySelector('button');
const TimeNode=document.querySelector('#time');
const CountScoreNode=document.querySelector('#combo');
const Animals=document.querySelectorAll('.cell');

let Time, Count;
const GameStart = () =>
{
    console.log('Game start now~');
    //遊戲開始後關閉click功能
    //Method1
    //BtnStart.disabled = true;
    //Method2
    BtnStart.removeEventListener('click', GameStart);

    //Init sys variable
    Time = 60;
    Count = 0;
    TimeNode.textContent = Time;
    CountScoreNode.textContent = Count;

    //Start timecount
    const Timer = setInterval(()=>
    {
        Time--;
        TimeNode.textContent = Time;
        
        if(!Time)
        {
            clearInterval(Timer);
            //遊戲結束後重新開啟click功能
            //Method1
            //BtnStart.disabled = false;
            //Method2
            BtnStart.addEventListener('click',GameStart);
        }
    },1000);

    //產生100個紅色事件，然後指定至9宮格某個state.png空閒位置，且100個紅色事件時機已被定義
    for(let i=0; i<100; i++)
    {
        //Method1
        // const AtSpace = Math.floor(Math.random*9); //0~8
        // const AtTime = Math.floor(Math.random()*56000); //0~60sec=> rand 0~55999 ms(留4秒準備結束遊戲)
        // const AtShow = Math.floor(Math.random()*3)+2;
        
        //Method2
        const ShowObj = 
        {
            space: Math.floor(Math.random()*9),
            show: Math.floor(Math.random()*3)+2,
            id:i
        };
        //在單一事件下，試圖觸發至畫面上
        setTimeout(()=>
        {
            ShowRedEvent(ShowObj);
        },Math.floor(Math.random()*56000));
    }
};

const ShowRedEvent = (Obj) => 
{
    console.log(Obj); //Test use

    if(Animals[Obj.space].classList.contains('red'))
    {
        //已經是紅色，想辦法換地方，避免遊戲時間無法出場
        Obj.space = Math.floor(Math.random()*9);
        //如果畫面都是Red，大家找不到空間，大家找新位置，就會拖慢系統效能
        //Solution: Delay 100ms
        setTimeout(()=>
        {
           ShowRedEvent(Obj);
        },100);
        return;
    }
    else
    {
        Animals[Obj.space].classList.add('red');
        Animals[Obj.space].src = 'Image/on.png';
    

        RedToYellow[Obj.id] = setTimeout(()=>
        {
            Animals[Obj.space].classList.remove('red');
            Animals[Obj.space].src = 'Image/state.png';
            
        }, Obj.show*1000);
    }
};

const CountScore = (space) =>
{
    if(Animals[space].classList.contains('red'))
    {
        //假如是Red，分數加1
        CountScoreNode.textContent = ++Count;

        Animals[space].classList.remove('red');
        Animals[space].classList.remove('greenyellow');
        Animals[space].src='Image/off.png';

        //clearTimeout(RedToYellow[Animals[space].dataset.playerid]);
        setTimeout(()=>
        {
            Animals[space].classList.remove('green');
            Animals[space].src = 'Image/state.png';
        }, 1000);
        //console.log('[Test msg] is red'); //Test use
    }
};

//Call Function area
BtnStart.addEventListener('click', GameStart);

document.onkeydown = function(Event)
{
    console.log(Event.keyCodeCode);
    switch(Event.keyCodeCode)
    {
        case Key1:
            CountScore(0);
            break;
        case Key2:
            CountScore(1);
            break;
        case Key3:
            CountScore(2);
            break;
        case Key4:
            CountScore(3);
            break;
        case Key5:
            CountScore(4);
            break;
        case Key6:
            CountScore(5);
            break;
        case Key7:
            CountScore(6);
            break;
        case Key8:
            CountScore(7);
            break;
        case Key9:
            CountScore(8);
            break;
    }
}