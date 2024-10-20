// for(let i=0; i<10; i++)
// {
//     if(i===4) continue;
//     if(i==7) break;
//     console.log(i);
// }
// console.clear();

function parrot(str)
{
    if(!str)
    {
        console.log("...鸚鵡看著你沒說話");
    }

    let j = 4;

    while(j > 0)
    {
        console.log(`RRRRRRR~~~~~~~`);
        if(str == 'mute') return;
        console.log(`${str}~~~~~~~`);
        j--;
    }
}
