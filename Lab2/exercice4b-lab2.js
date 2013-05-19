var http = require('http');
http.createServer(function(req, res) {
	if(req.url.toString() == "/livre" || req.url.toString() == "/biere"){
		http.get("https://github.com/jpcaissy/INF4375-2013E/blob/master/01/solutions/data/biere.json", function(requete) {
		  res.writeHead(404, {"Content-Type" : "application/json"});
		  res.write(JSON.stringify(requete));
		  res.end();
		});
	}else {
		res.writeHead(404, {"Content-Type" : "text/html"});
		res.write("erreur, page introuvable");
		res.end();
	}
}).listen(8080);