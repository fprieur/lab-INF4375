var fs = require("fs");
var xmldom = require("xmldom");

exports.getFichierReferences = function (callback,fichier){
	
	fs.readFile("livre.xml", function(err, data){
		if (err){
			callback([]);
		} else {
			var result = [];
			var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
			var documentList = domRoot.getElementsByTagName("livre");
			for (var i = 0; i < documentList.length; i++) {
		        var currentDocument = documentList[i];
		        var object = {};
		        object.titre = currentDocument.getElementsByTagName("nom")[0].textContent;
		        object.auteur = currentDocument.getElementsByTagName("auteur")[0].textContent;
		        object.prix = currentDocument.getElementsByTagName("prix")[0].textContent;
		        result.push(object);
	      	}
	      	callback(result);
		}
	});
};