var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	database: 'node',
	user: 'root',
	password: 'password'
});
connection.connect(function(err){
	if (err) console.log("连接Mysql数据库node失败");
	else {
		console.log("连接Mysql数据库node成功");
		/* 插入数据
		connection.query('insert user(employee_id, en_name) values(?, ?)', ['T04300', 'Geoffrey'], function(err, result) {
			if (err) {
				console.log("插入数据Geoffrey失败");
			} else {
				console.log(result);
			}
		});
		*/
		
		connection.query('select * from user', function(err, result) {
			if (err) {
				console.log('数据查询失败');
			} else {
				console.log(result);
			}
		});
		
		connection.end(function(err){
			if (err) console.log("关闭Mysql数据库失败");
			else {
				console.log("关闭Mysql数据库成功");
			}
		});
	};
});