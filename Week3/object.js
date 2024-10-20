//物件object用於存資料，陣列拿來計算整理用
const Student_A = 
{
    name: 'Alvin',
    age: 22,
    gender: 'male',
    say: () => console.log('Time is money.')
    // say: function()
    // {
    //     console.log('Time is money');
    // }
};

const mdy = 
{
    name:'Jack',
    age: 26
};

Student_A = 
{
    ...Student_A,
    ...mdymdy
};

//---------解構 & 重構-------------*/
const Student_B = {...Student_A};
Student_B.name = 'Jack';
Student_B.age = 26; 

Student_A = {...Student_B};