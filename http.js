var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<head><meta charset="utf-8" /></head>');
	res.end('你好, NodeJs \n');
}).listen(80, "127.0.0.1");
console.log('server running on http://127.0.0.1:80');