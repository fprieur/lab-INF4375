var http = require('http');
var xmlLivre = require("./xml-livre.js");
var xmlBiere = require("./xml-biere.js");
http.createServer(function(req, res) {
	if(req.url.toString() == "/biere"){
		  xmlBiere.getFichierReferences(function(listeBiere){
			  res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
			  res.write(JSON.stringify(listeBiere));
			  res.end();
		  });
	}else if(req.url.toString() == "/livre"){
		  xmlLivre.getFichierReferences(function(listeLivre){
			  res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
			  res.write(JSON.stringify(listeLivre));
			  res.end();
		  }); 
	}else {
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("erreur, page introuvable");
		res.end();
	}
}).listen(8080);