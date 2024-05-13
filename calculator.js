const url = require('url');
const http = require('http');
const dt = require('./addition');
const dt1 = require('./subtraction');
const dt2 = require('./multiplication');
const dt3 = require('./division');
const querystring = require('querystring');

http.createServer(function(req, res) {
    console.log('URL ' + req.url + ' received.');

    var path = url.parse(req.url).pathname;
    console.log('Request for ' + path + ' received.');

    var query = url.parse(req.url).query;
    console.log(query);

    var qs = querystring.parse(query);
    console.log(qs);

    var a = parseFloat(qs["a"]);
    var b = parseFloat(qs["b"]);
    var c = qs["c"];

    if (c == "+") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("Addition: " + dt.addition(a, b));
        res.end();
    }
    if (c == "-") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("Subtraction: " + dt1.subtraction(a, b));
        res.end();
    }
    if (c == "*") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("Multiplication: " + dt2.multiplication(a, b));
        res.end();
    }
    if (c == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("Division: " + dt3.division(a, b));
        res.end();
    }

}).listen(8081);
console.log("Server Connected successfully");
