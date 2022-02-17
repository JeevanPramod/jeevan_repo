// let obj={};
// console.log(obj);

// let obj={
//     name:'jeevan',
//     lastname:'pramod',
//     age:32
// }
// console.log(obj);

let tony=
{
    name:'tony',
    lastname:'stark',
    friends:['steve', 'bruce','peter'],
    age:45,
    isAvenger:true,
    abc:undefined,
    address:
    {
        state:'new york',
        city:'long island'
    },
    sayHi:function fn()
    {
        console.log('iron man says hello');
        return "part of journey is end";
    },
}
// console.log(tony);
// two ways to acess values
//1

// console.log(tony.name);
// console.log(tony.friends);
// console.log(tony.age);
// console.log(tony.isAvenger);
// console.log(tony.address.city);
// console.log(tony.sayHi());
//2

// console.log(tony['name']);
// console.log(tony['friends'][0]);
// console.log(tony['age']);
// console.log(tony['isAvenger']);
// console.log(tony['address']['city']);
// console.log(tony['sayHi']());

let karr = Object.keys(tony);
console.log(karr);
// for (let key in tony)
// {
//     // console.log(key);
//     // console.log(tony[key]);
   
// }
for(let i=0; i<karr.length;i++)
{
    // let key=karr[i];
    // console.log(tony[key]);
    console.log(tony[karr[i]]);
}