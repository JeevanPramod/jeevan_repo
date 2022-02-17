let a;
for(a=1; a<=20; a++)
{
    if(a%3==0&&a%5==0)
    {
         console.log(a,"fizzbuzz");
    }
    else if(a%3==0)
    {
        console.log(a,"fizz");
    }
    else if(a%5==0)
    {
        console.log(a,"buzz");
    }
}