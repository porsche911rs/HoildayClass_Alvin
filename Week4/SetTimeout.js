// const Todo = function()
// {
//     console.log('Bang~');
// }
//setTimeout(Todo, 3000);

const timeTag1 = setTimeout(()=>
{
    console.log('BANG 1 !!');
}, 8000);

const timeTag2 = setTimeout(()=>
{
    console.log('BANG 2 !!');
}, 8000);
console.log('Done!!!');
clearTimeout(timeTag1);
//clearTimeout(timeTag2);

/********************************** */
function ReadyBom()
{
    setTimeout(() => 
    {
        console.log('Combo~~BOM');
        ReadyBom();
    }, 1000);
}