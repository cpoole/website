//add libraries to use within the program
var sys = require("sys");
my_http = require("http");

//the funciton given as the first argument is executed every time an event is 
//triggered on port 8080. the stahp is a cheeky notifier that the server has been hit successfully
//
//the request object contains all pertinent information about the HTTP GET request... to see this 
//go into your browser, right click >> inspect element >> network tab >> refresh page >> click on 
//the request >> click on headers tab 
//
//the response object handles the servers response, first we set the header to give a confirmation
//pose code of 200, then we serve simple plain text back to the requester
my_http.createServer(function(request, response){
  sys.puts("Stahp");
  response.writeHeader(200, {"Content-Type": "text/plain"});
  response.write("Whats gucci");
  response.end();
}).listen(8080);
sys.puts("Server Running on 8080");

