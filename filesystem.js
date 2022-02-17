let fs = require('fs');
let data = fs.readFileSync('abc.txt');
console.log(data.toString());
let wdata = 'this is some demo data that i want to write';
fs.writeFileSync('write.txt',wdata);
fs.appendFileSync('write.txt', 'this is append data');
fs.unlinkSync('abc.txt');
// fs.mkdirSync('other');
console.log(fs.existsSync('D:/bits.txt'));