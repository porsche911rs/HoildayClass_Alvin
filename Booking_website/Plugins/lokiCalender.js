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
        //RunCalenderService();

        const MyCalendar = RunCalenderService();
        MyCalendar.print();
    });
    document.querySelector('a[hrf="nextCtrl"]').addEventListener('Click', (e) => 
        {
            MyCalendar.add();
        });
    document.querySelector('a[hrf="prevCtrl"]').addEventListener('Click', (e) => 
        {
            MyCalendar.sub();
        });
}

const RunCalenderService = () =>
{
    let TheDay = dayjs();
    console.log('Start design calender');
    let
        Today = dayjs();
        CalLeft = 
        {
            title: 'Left calender',
            ListBox: '',
            ThisDate: TheDay,
        };
        CalRight = 
        {
            title: 'Right calender',
            ListBox: '<li>1</li><li>2</li>',
            ThisDate: TheDay.add(1, 'month'),
        };
        ChooseList = (Node =>{})
        ListMaker = (Obj)=> //調整萬年曆物件，調整後Return修改後物件
        {
            const FirstDay = Obj.ThisDate.startOf('month').day();
            const TotalDay = Obj.ThisDate.daysInMonth();
            //console.log(FirstDay, TotalDay);

            for(let i=1; i<(FirstDay || 7); i++) //控制產生多少空白日
            {
                Obj.ListBox += `<li class="Jscal"></li>`
            }

            for(let i=1; i<TotalDay; i++) //控制產生多少日期
            {
                let ClassStr = 'JsCal';
                //過期判定
                const TempDay = Obj.ThisDate.date(i);
                
                if(TempDay.isSameBefore(Today)) ClassStr += 'DelDay';
                else
                {
                    const isNationalHoliday= NationalHoliday.includes(TempDay.format('YYYY-MM-DD'));
                    //假日判定，包含假日(左)與國定假日(右)
                    if(((FirstDay + i) % 7 < 2) || isNationalHoliday) ClassStr += 'Hoilday';

                    //客滿
                    const CheckBookObject = Booked.find((BookObj) => BookObj.date === TempDayStr);
                    if(
                        CheckBookObject
                        &&
                        (Pallet.counrr === Object.values(CheckBookObject.sellout).reduce((Prv,Cur) => Prv+Cur, 0))//總和等於總售出
                    )ClassStr += 'FullDay';
                }
                Obj.ListBox += `<li class="${ClassStr}">${i}</li>`;
            }
            // Method2
            // const MonthIndexToString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // Obj.title = `${MonthIndexToString[Obj.ThisDate.month()]} ${Obj.ThisDate.year()}}`;

            // Method3
            const TwMonth = window.dayjs_locale_zh_tw.months;
            Obj.title = `${TwMonth[Obj.ThisDate.month()]} ${Obj.ThisDate.year()}`;
            return Obj;
        };
        
        return
        {
            print: ()=>ListPrint();
            add: () => 
            {
                ListPrint();
            }
            sub: () => 
            {
                ListPrint();
            }
        };

        ListPrint = ()=> //輸出至DOM
        {
            const NewCalLeft = ListMaker(CalLeft); //把乾淨的calc物件丟進得到更新後calc物件
            const NewCalRight = ListMaker(CalRight);
            ListMaker(CalRight); //也可不使用return obj來操作DOM，因為Listmaker直接指定物件內容，所以原本的物件就被更新也可以直接用原本obj變數來操作DOM

            document.querySelector('.LeftDayList').innerHTML = ListMaker(CalLeft).ListBox;
            document.querySelector('.RightDayList').innerHTML = ListMaker(CalRight).ListBox;

            document.querySelector('leftBar>h4').innerHTML = ListMaker(CalLeft).title;
            document.querySelector('rightBar>h4').innerHTML = ListMaker(CalRight).title;
        }
    ListMaker();
}
Init();
//console.log(Today);
