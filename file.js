var fs = require('fs');
var iconv = require('iconv-lite');

fs.readFile('./message.txt', function(err, data) {
	if (err) console.log('read file failed');
	else {
		var str = data.toString();
		// console.log(str);
		var begin = str.indexOf('base64');
		var end = str.indexOf('text/html');
		// console.log(begin);
		// console.log(end);
		var tempStr = str.slice(begin + 10, end - 62);
		console.log(tempStr);
		// console.log("===========================");
		var b = new Buffer(tempStr, 'base64');
		// console.log(b.toString());
		console.log(iconv.decode(b, 'gb2312'));
	}
});