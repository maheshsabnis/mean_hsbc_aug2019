// 1. load express and other modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// 2. create its instance
var instance = express();

// 2a. the data layer
var products = [
    { ProductId: 1001, ProductName: 'Laptop', CategoryName: 'Electronics', Manufacturer: 'HP', Price: 10000 },
    { ProductId: 1002, ProductName: 'desktop', CategoryName: 'Electronics', Manufacturer: 'HP', Price: 10000 },
    { ProductId: 1003, ProductName: 'Router', CategoryName: 'Electronics', Manufacturer: 'HP', Price: 10000 },
    { ProductId: 1004, ProductName: 'RAM', CategoryName: 'Electronics', Manufacturer: 'HP', Price: 10000 },
];

// 2b. configure the Message-Formatting Middleware for express
// the bodyParser.json() will read http request body in 
// post and put request and serialize it as JSON object
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false })); // no url encoded values

// 2c. configure the CORS middleware for the express instance
// cors() w/o parameters means all origines, all headers  and all methods
instance.use(cors());

// 3. create REST API
// the REST methods accepts the URI for Routing and
// RequestHandler, the callback for Request and Response processing
// http://localhost:9009/api/products
instance.get('/api/products', function(request, response) {
    // response.send(JSON.stringify(products));
    var authValues = request.headers.authorization;
    // read the auth values are process it
    var recivedValues = authValues.split(' ');
    var credenatials = recivedValues[1].split(':');
    if (credenatials[0] == "mahesh" && credenatials[1] == "mahesh") {
        response.send(JSON.stringify(products));
    } else {
        response.sendStatus(401); // unauthorized
    }
});
// the header parameter with :id
instance.get('/api/products/:id', function(request, response) {
    // read the header parameter from request
    var id = request.params.id;
    // filter the record from data based on id
    var res = products.filter(function(v, i) {
        return v.ProductId == id;
    });
    // send response
    response.send(JSON.stringify(res));
});

instance.get('/api/products/:pname/:cond/:cname', function(request, response) {
    console.log('in multi');
    // read the header parameter from request
    var pname = request.params.pname;
    var cond = request.params.cond;
    var cname = request.params.cname;
    console.log(pname + '  ' + cond + '  ' + cname);
    // filter the record from data based on id
    var res = products.filter(function(v, i) {
        if (cond == "OR")
            return v.ProductName == pname || v.CategoryName == cname;
        if (cond == "AND")
            return v.ProductName == pname && v.CategoryName == cname;
    });
    // send response
    response.send(JSON.stringify(res));
});

instance.post('/api/products', function(request, response) {
    // read the request body
    console.log(request.body);
    // store data locally in JSON object with Key:Value pair 
    var prd = {
        ProductId: request.body.ProductId,
        ProductName: request.body.ProductName,
        Manufacturer: request.body.Manufacturer,
        CategoryName: request.body.CategoryName,
        Price: request.body.Price

    };
    console.log('Received data ' + JSON.stringify(prd));

    // push data in array
    products.push(prd);

    // send the modified array
    response.send(JSON.stringify(products));
});

instance.delete('/api/products/:id', function(request, response) {
    var id = request.params.id; // thie will provide Product Id
    // 1. serach the index of the Product in the products array based on ProductId
    // 2. Use splice() method of array to delete the product from array

    // 3. return the remeining product array
    response.send(JSON.stringify(products));
});

// 4. start listening
instance.listen(9009, function() {
    console.log('server started on port 9009');
});