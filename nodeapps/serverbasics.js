// 1. load the http module
var http = require('http');

// create a data object
var employees = [
    { EmpNo: 101, EmpName: 'A', DeptName: 'D1', Salary: 11000 },
    { EmpNo: 102, EmpName: 'B', DeptName: 'D2', Salary: 12000 },
    { EmpNo: 103, EmpName: 'C', DeptName: 'D1', Salary: 13000 },
    { EmpNo: 104, EmpName: 'D', DeptName: 'D2', Salary: 14000 }
];


// 2. create the Request Listener aka logic to accept http request
// createServer() method accepts the 'RequestListener', this is the callback function
// with Request and Response objectd
var server = http.createServer(function(request, response) {
    // your logic here
    // writing the response Header
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // writing the data in the response body
    // response.write('Hello World!!!');
    // end the response
    response.writeHead(200, { 'Content-Type': 'application/json' });
    // serialize the employees arrany in JSOn format and respond
    response.write(JSON.stringify(employees));
    response.end();
});

// 3. start listening on the port for accepting request on this port
server.listen(9009);
console.log('Server listening on port 9009');