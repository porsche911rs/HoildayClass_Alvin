// let RootUserName = 'Loki';     /*Val of str*/
// let RootUserAge = 23;          /*Val of num*/
// let TrainArr = ['A', true, 3]; /*Value of array*/

// let EmptyArray1 = new Array();
// let EmptyArray2 = [];
// /*EmptyArray1 & EmptyArray2 are the same meaning.*/
// let EmptyArray3 = [1, 2, 'A', true];

//使用push, pop, shift, unshift來操作陣列增減長度與內容(But有記憶體污染的問題)
//ex: EmptyArray3.push('B', true, 3)

// let ArrInit = [1,2,3];
// let ErrCloneArr = ArrInit;

// let CorrectCloneArr = [...ArrInit]; //解構與重構-->將陣列拆開，重組後塞給B

// let a = [1,2,3];
// let b = [...a];
// b.push('A');
// console.log(b);

// let c = [...a, 'Alvin', ...b];
// console.clear();

// //a.push('C');
// a= [...a, 'C']; /*the same with a.push() */

/////////////////////////////////////////////
// function hello()
// {
//     console.log('hello');
// }
// minArr = [1,2,3];
// //bigArr[hello, minArr];
// bigArr = 
// [
//     ['A', 'B', 'C'],
//     [10, 20, 30]
// ]
// console.log(bigArr);

// const arr2 = [1,2,3]; //保護變數有無重新指定(記憶體改變)
// arr2.push('A');

const ary = [];
for(let i=0 ; i<10; i++)
{
    ary.push(`A${i*3}`);
}

// for(let i=0; i< ary.length; i++)
// {
//     console.log(ary[idx]);
// }

// function ShowMSG(Val,idx)
// {
//     //console.log('Hello');
//     console.log(`index => ${idx}, Value => ${val}`);
// }
// ary.forEach(ShowMSG); //forEach-->希望提供一個function,他試著提供參數給你的function

ary.forEach(function(Val,idx)
{
    console.log(`index => ${idx}, value => ${val}`);
});