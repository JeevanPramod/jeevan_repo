let fs = require("fs");
let input = process.argv.slice(2);
console.log("input", input);
let options = [];
let filepaths = [];
for(let i=0; i<input.length; i++)
{
    if(input[i]=="-s"||input[i]=="-b"||input[i]=="-n")
    {
        options.push(input[i]);
    }
    else
    {
        filepaths.push(input[i]);
    }
}
console.log("options", options);
console.log("filepath", filepaths);
for(let i=0; i<filepaths.length; i++)
{
    let isFilePresent = fs.existsSync(filepaths[i]);
    if(isFilePresent==false)
    {
        console.log("filepath", filepaths[i], "does not exists");
    }
}
let totalcontent = "";
for(let i=0; i<filepaths.length; i++)
{
    let ContentOfCurrent = fs.readFileSync(filepaths[i]);
    totalcontent += ContentOfCurrent + "\r\n";
}
let isSoption = options.includes("-s");
if(isSoption == true)
{
    let outputArr = totalcontent.split("\r\n");
    let tempArr = [];
    for(let i=0; i<outputArr.length; i++)
    {
        let isElementValid = outputArr[i]!=="";
        if(isElementValid)
        {
            tempArr.push(outputArr[i]);
        }
    }
    totalcontent = tempArr.join("\r\n");
}
console.log(totalcontent);

let isN=options.includes("-n");
let isB=options.includes("-b");
let finaloption;
if(isN==true)
{
    if(isB==true)
    {
        let idxB=options.indexOf("-b");
        let idxN=options.indexOf("-n");
        finaloption=idxB<idxN? "-b":"-n";
    }
    else
    {
        finaloption="-n";
    }
}
else if(isB==true)
{
    finaloption="-b"
}

// let isN = options.includes("-n");
if(finaloption=="-n")
{
    let count = 1
    let ContentArr=totalcontent.split("\r\n");
    for(let i=0; i<ContentArr.length; i++)
    {
        ContentArr[i]=count+". "+ContentArr[i];
        count++;
    }
    totalcontent=ContentArr.join("\r\n");
}
console.log(totalcontent);

// let isB = options.includes("-b");
if(finaloption=="-b")
{
    let count = 1;
    let contentArr = totalcontent.split("\r\n");
    for(let i=0; i<contentArr.length; i++)
    {
        if(contentArr[i]!="")
        {
            contentArr[i]=count+". "+contentArr[i];
            count++;
        }
    }
    totalcontent=contentArr.join("\r\n");
}
console.log(totalcontent);