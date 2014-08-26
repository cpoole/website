var sys = require("sys");
my_http = require("http");
path = require("path");
url = require("url");
filesys = require("fs");
my_http.createServer(requestHandler).listen(8080);

function requestHandler(request, response){
  //the parse function gets the pathname of the request URL, which we then concatenate with
  //the current working directory of the server
  var my_path = path.basename(request.url) || 'index.html';
  console.dir(my_path);
  var full_path = path.join(process.cwd(),my_path);
  var localFolder = process.cwd();
  var page404 = localFolder + '404.html';

  getFile(full_path, response);
          
  //fileName= path.basename(request.URL) || 'index.html',

};

function getFile(filepath, response){
  filesys.exists(filepath, function(exists){
    if(exists){
      filesys.readFile(filepath,function(err,contents){
        if(!err){
          console.dir("file found");
          response.end(contents);
        }else {
          console.dir("file found but error reading");
          response.writeHeader(500,{"Content-Type": "test/plain"});
          response.write("500 not found \n ");
          response.end();
          console.dir(err);
        };
      });
    } else{
      filesys.readFile((process.cwd()+'/404.html'),function(err,contents){
        if(!err){
          console.dir("file not found");
          response.writeHead(404,{'Content-Type':'text/html'});
          response.end(contents);
        }
        else{
          console.dir("file not found and error serving 404");
          response.writeHeader(500,{"Content-Type": "test/plain"});
          response.write("500 not found \n ");
          response.end();
          console.dir(err);
        };
      });
    };
  });
};

sys.puts("Server Runing on 8080");

