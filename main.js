var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var app = express()
// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})

/*client.set("key", "value");
client.get("key", function(err,value){ console.log(value)});*/

 client.on("error", function (err) {
        console.log("Error " + err);
    });

// Set a value
client.set("string key", "Hello1 World", redis.print);
// Get the value back
client.get("string key", function (err, reply) {
console.log(reply.toString());
});
client.quit();

///////////// WEB ROUTES

// Add hook to make it easier to get all visited URLS.
app.use(function(req, res, next) 
{
	console.log(req.method, req.url);

	// ... INSERT HERE.

	next(); // Passing the request to the next handler in the stack.
});


// app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
//    console.log(req.body) // form fields
//    console.log(req.files) // form files

//    if( req.files.image )
//    {
// 	   fs.readFile( req.files.image.path, function (err, data) {
// 	  		if (err) throw err;
// 	  		var img = new Buffer(data).toString('base64');
// 	  		console.log(img);
// 		});
// 	}

//    res.status(204).end()
// }]);

// app.get('/meow', function(req, res) {
// 	{
// 		if (err) throw err
// 		res.writeHead(200, {'content-type':'text/html'});
// 		items.forEach(function (imagedata) 
// 		{
//    		res.write("<h1>\n<img src='data:my_pic.jpg;base64,"+imagedata+"'/>");
// 		});
//    	res.end();
// 	}
// })





/*app.get('/', function(req, res){
{
res.send('hello world');
}
});
app.get('/get', function(req, res){
{
	client.get("theKeyToHappiness", function(err,value){
	console.log(value);
	res.send(value);
});
}
});
app.get('/set', function(req, res){
	client.set("theKeyToHappiness", "Don't worry, be happy");
	client.expire("theKeyToHappiness", 10);
	res.send('set');
});
*/

// HTTP SERVER
 var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port
   console.log('Example app listening at http://%s:%s', host, port)
 })

