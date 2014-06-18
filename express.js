var express = require('express');
var http = require('http');
var app = express();
app.get('/index.html', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<head><meta charset="utf-8" /></head>');
	res.end('你好, NodeJs Express\n');
}).listen(80, "127.0.0.1");
console.log('server running on http://127.0.0.1:80');