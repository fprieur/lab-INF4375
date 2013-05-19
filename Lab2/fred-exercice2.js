var lireFichier = require('fs');
lireFichier.readFile('fichierTexteFred.txt', function (err,data) {
	if (err) throw err;
	console.log(data.toString());
});

