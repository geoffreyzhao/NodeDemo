var inbox = require('inbox');
var fs = require('fs');
var iconv = require('iconv-lite');

var client = inbox.createConnection(false, 'pop.gmail.com', {
	secureConnection: true,
    auth:{        
        user: "zhaoshuaigeng@gmail.com",
        pass: "zhaoshuaigeng"
    }
});

 client.connect();
var buffer = new Buffer(1024, 'utf8');
 client.on('connect', function() {
 	client.openMailbox("INBOX", function(error, info){
        if(error) throw error;
        client.listMessages(-10, function(err, messages){
            messages.forEach(function(message){
                console.log(message.UID + ": " + message.title);
                console.log('-------------------------------------------1');
                console.log(message);
                console.log('-------------------------------------------2');
            });
        });
        client.createMessageStream(1).pipe(fs.createWriteStream('./message.txt'), {end: false});
    });
 });