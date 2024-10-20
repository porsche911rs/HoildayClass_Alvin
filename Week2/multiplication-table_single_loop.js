for(let i=1,j=1; i<10 && j<10; j++)
{
    console.log(`${i}*${j}=${i*j}`);
    if(j==9)
    {
        i++;
        j=0;
        if(i<10)
        {
            console.log(`${i}*${j}=${i*j}`);
        }   
    }
}