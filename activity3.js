let fs = require('fs');
let path = require('path');
let extensions = {
    'Images':['.png', '.jpg', '.jpeg', '.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf', '.txt', '.doc'],
    'Compressed':['.zip', '.rar'],
    'Videos':['.mkv', '.mp4']
}
let input = process.argv.slice(2);
let folderpath = input[0];
console.log(input[0]);
let ExtFolderPath = folderpath;
function CheckFolder(extension, folderpath)
{
    for(let key in extensions)
    {
        let arr = extension[key];
        let eon = arr.includes(extension);
        if(eon==true)
        {
            console.log(key);
            ExtFolderPath = path.join(folderpath, key);
            console.log(ExtFolderPath);
            break;
        }
    }
    return fs.existsSync(ExtFolderPath);
}
let content = fs.readdirSync(folderpath);
for(let i=0; i<content.length; i++)
{
    console.log(path.extname(content[i]));
    let extensionName = path.extname(content[i]);
    let extensionFolderExist = CheckFolder(extensionName, folderpath);
    console.log(extensionFolderExist);
}