//Declare global variable
let APIPath = './db.json', Booked = [], NationalHoliday = [], Pallet = [];

const Init = () =>
{
    fetch('http://127.0.0.1:5500/Booking_website/db.json', {method: 'GET'})
    .then(Response=> Response.json())
    .then(json => 
    {
        console.log(json);
        ({Booked, Pallet, NationalHoliday} = json);
        RunCalenderService();
    });
}

const RunCalenderService = () =>
{
    let TheDay = dayjs();
    console.log('Start design calender');
    const 
        Today = dayjs();
        CalLeft = 
        {
            title: 'Left calender',
            ListBox: '<li>1</li><li>2</li>'
            ThisDate: TheDay,
        },
        CalRight = 
        {
            title: 'Left calender',
            ListBox: '<li>1</li><li>2</li>'
            ThisDate: TheDay.add(1, 'month'),
        },

        ListMaker = (Obj)=> //調整萬年曆物件，調整後Return修改後物件
        {
            const FirstDay = Obj.ThisDate.startOf('month').day();
            const TotalDay = Obj.ThisDate.daysInMonth();
            //console.log(FirstDay, TotalDay);

            for(let i=1; i<(FirstDay || 7); i++) //控制產生多少空白日
            {
                Obj.ListBox += `<li class="Jscal"></li>`
            }
            //Method2
            const MonthIndexToString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            Obj.title = `${MonthIndexToString[Obj.ThisDate.month()]} ${Obj.ThisDate.year()}}`;

            //Method3
            const TwMonth = window.dayjs_locale_zh_tw.months;
            Obj.title = `${TwMonth[Obj.ThisDate.month()]} ${Obj.ThisDate.year()}`;
            return Obj;
        },

        ListPrint = ()=> //輸出至DOM
        {
            document.querySelector('.LeftDayList').innerHTML = ListMaker(CalLeft).ListBox;
            document.querySelector('.RightDayList').innerHTML = ListMaker(CalRight).ListBox;

            document.querySelector('leftBar>h4').innerHTML = ListMaker(CalLeft).title;
            document.querySelector('rightBar>h4').innerHTML = ListMaker(CalRight).title;
        }

    ListMaker();
}
Init();
//console.log(Today);
