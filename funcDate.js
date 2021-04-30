var http_module2 = require('http');
var result=require('./time');
http_module2.createServer(function(req,res){

   // res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("current Date and Time "+result.timeDate());
    res.end();

})
.listen(7080);

