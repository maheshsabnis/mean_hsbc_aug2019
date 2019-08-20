var http = require('http');

var data = [
    'Mahesh', 'Ajay', 'Tejas', 'Brijesh', 'Chaitanya', 'Deepak', 'Eshwar'
];


var server = http.createServer(function(request, response) {
    // check if the url contains 'sort', if yes then respond sorted array
    // else send array as it is
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (request.url == '/sort') {
        response.write(JSON.stringify(data.sort()));
    } else {
        response.write(JSON.stringify(data));
    }
    response.end();
});

server.listen(9009);
console.log('Server listening on port 9009');