let a=[2,5,9,1,11,87];
function las(a)
{
    let largest = -1;
    let smallest = 1001;
    for (let i=0; i<a.length; i++)
   {
         if(a[i]>largest)
         {
            largest = a[i];
         }
         if(a[i]<smallest)
         {
            smallest = a[i];
         }
    }
    console.log(smallest + "   " + largest);
    return([smallest, largest]);
}
let rval = las(a);
console.log(rval);
