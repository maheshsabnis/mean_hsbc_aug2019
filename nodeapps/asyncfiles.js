var fs = require('fs');

// Async File Write
fs.writeFile('./myfile.txt', 'data is written in file using async call', function(err) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('data is wriiten into file');
});
console.log('Doing Something else');
for (var i = 0; i < 10; i++) {
    console.log('Some thing else  ' + i);
}
fs.readFile('./myfile.txt', function(err, data) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data.toString());
});
console.log('Data Read from File');