var http_module=require("http");
http_module.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});

    res.write("Hello World!");
    res.end();
   
})
.listen(8000);