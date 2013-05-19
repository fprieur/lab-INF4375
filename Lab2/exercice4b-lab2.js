var http = require('http');
var biereJson = require("./biere.json");
var livreJson = require("./livre.json");
http.createServer(function(req, res) {
	if(req.url.toString() == "/biere"){
		  res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
		  res.write(JSON.stringify(biereJson));
		  res.end();
	}if(req.url.toString() == "/livre"){
		  res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
		  res.write(JSON.stringify(livreJson));
		  res.end(); 
	}else {
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("erreur, page introuvable");
		res.end();
	}
}).listen(8080);