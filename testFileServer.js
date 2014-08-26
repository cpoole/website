var sys = require("sys");
my_http = require("http");
path = require("path");
url = require("url");
filesys = require("fs");
my_http.createServer(function(request,response){
  //the parse function gets the pathname of the request URL, which we then concatenate with
  //the current working directory of the server
  var my_path =url.parse(request.url).pathname;
  var full_path = path.join(process.cwd(),my_path);
  path.exists(full_path,function(exists){
    if(!exists){
      response.writeHeader(404,{"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
    }
    else{
      if(full_path == 'index.html'){
        filesys.readFile(full_path, function(err,file){
          if(err){
            response.writeHeader(500,{"content-Type": "text/plain"});
            response.write(err+ "OH GOD WHAT HABE YOU DONE?!?!\n");
            response.end();
          }
          else{
            response.writeHeader(200);
            response.write(file);
            response.end();
          } 
        });
      }
      filesys.readFile(full_path,"binary", function(err,file){
        if(err){
          response.writeHeader(500,{"content-Type": "text/html"});
          response.write('<h1>' + err+ 'OH GOD WHAT HAVE YOU DONE?!?!</h1>');
          response.end();
        }
        else{
          response.writeHeader(200);
          response.write(file,"binary");
          response.end();
        }
      });
    }
  });
}).listen(8080);
sys.puts("Server Runing on 8080");

