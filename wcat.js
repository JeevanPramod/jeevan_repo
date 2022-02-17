let input = process.argv.slice(2);
console.log("input",input);
let options=[];
let filepaths=[];
for(let i=0; i<input.length; i++)
{
    //first character js string
    let firstchar=input[i].charAt(0);
    if(firstchar=="-")
    {
        options.push(input[i]);
    }
    else
    {
        filepaths.push(input[i]);
    }
}
console.log("options", options);
console.log("filepaths", filepaths);