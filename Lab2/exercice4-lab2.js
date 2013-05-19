var http = require('http');
http.createServer(function(req, res) {
	if(req.url.toString() == "/livre" || req.url.toString() == "/biere"){ 
		res.writeHead(200, {"Content-Type" : "application/json"});
		res.write("URL :" + req.url);
		res.end();
	}else {
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("erreur, page introuvable");
		res.end();
	}
}).listen(8080);