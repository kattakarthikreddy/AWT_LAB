var http_module=require("http");
var fs_module=require("fs");
http_module.createServer(function(req,res){
    fs_module.readFile('sample.txt',function(error,result){
    if(error){throw error;}
    else{
        res.write(result);

        res.end();
    }

    })
}).listen(2000);