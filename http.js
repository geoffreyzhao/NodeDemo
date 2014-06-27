var http = require('http');
var server = http.createServer(function(req, res){
	// res.writeHead(200, {'Content-Type': 'text/html'});
	// res.write('<head><meta charset="utf-8" /></head>');
	// res.end('你好, NodeJs \n');
});
server.listen(3306, '127.0.0.1');
server.on('listening', function() {
	console.log('server is listening');
	server.close();
});
server.on('close', function(){
	console.log('server close');
});
server.on('error', function(e) {
	if (e.code == 'EADDRINUSE') {
		console.log('server port is unused');
	}
});