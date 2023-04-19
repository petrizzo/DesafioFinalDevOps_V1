let express = require('express');
let path = require('path');
let app = express();

// with docker-compose: container-name, with K8s: service-name 
let productsEndpoint = process.env.PRODUCTS_SERVICE || 'localhost'
let shoppingCartEndpoint = process.env.SHOPPING_CART_SERVICE || 'localhost'

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/get-products', function (req, res) {
    var http = require('http');

    var options = {
        host: productsEndpoint,
        path: '/',
        port: '3001',
        method: 'GET'
    };

    callback = function(response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            res.writeHead(200)
            res.end(str);
        });
    }

    var req = http.request(options, callback);
    // This is a request to "products" service
    req.write("");
    req.end();
});

app.get('/get-shopping-cart', function (req, res) {
    var http = require('http');

    var options = {
        host: shoppingCartEndpoint,
        path: '/',
        port: '3002',
        method: 'GET'
    };

    callback = function(response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            res.writeHead(200)
            res.end(str);
        });
    }

    var req = http.request(options, callback);
    // This is a request to "shopping-cart" service
    req.write("");
    req.end();
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});

