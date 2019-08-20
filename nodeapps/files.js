// 1. load the fs module
var fs = require('fs');
// synchronous methods
// fs.writeFileSync('./myfile.txt', 'The file is written Synchronously');
// console.log('File is Written');
console.log();
try {
    var data = fs.readFileSync('./myfile.txt');
    console.log(data.toString());
} catch (e) {
    console.log(e);
}