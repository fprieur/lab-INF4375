var fs = require("fs");
var xmldom = require("xmldom");

exports.getFichierReferences = function (callback,fichier){
	
	fs.readFile("biere.xml", function(err, data){
		if (err){
			callback([]);
		} else {
			var result = [];
			var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
			var documentList = domRoot.getElementsByTagName("compagnie");
			for (var i = 0; i < documentList.length; i++) {
		        var currentDocument = documentList[i];
		        var object = {};
		        object.nom = currentDocument.getElementsByTagName("nom")[0].textContent;
		        object.logo = currentDocument.getElementsByTagName("logo")[0].textContent;
		        //object.biere = currentDocument.getElementsByTagName("biere")[0].textContent;
		        var biereList = currentDocument.getElementsByTagName("biere");
		        var bieres = [];
		        var tabBieres = [];
		        for (var j = 0; j < biereList.length; j++){
		        	var currentBiere = biereList[j];
		        	bieres[j] = currentBiere.textContent;
		        }
		        object.bieres = bieres;
		        result.push(object);
	      	}
	      	callback(result);
		}
	});
};