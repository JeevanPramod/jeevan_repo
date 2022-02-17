let fs = require('fs');
let path = require('path');
let extensions =
{
    'Images':['.png', '.jpg', '.jpeg', '.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf', '.txt', '.doc'],
    'Compressed':['.zip', '.rar'],
    'Videos':['.mkv', '.mp4']
}
let input = process.argv.slice(2);
console.log(input[0]);
let content = fs.readdirSync(input[0]);
for(let i=0; i<content.length; i++)
{
    console.log(content[i]);
    console.log(path.extname(content[i]));
}