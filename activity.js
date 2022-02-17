let fs = require('fs');
let input = process.argv.slice(2);
console.log(input[0]);
let content = fs.readdirSync(input[0]);
console.log(content);
