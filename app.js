var request = require('request');
var _ = require('lodash');
var configuration = require('./configuration.js');

detect("Hello. Please detect me.");
languages();

function detect(text)
{
	var url = configuration.baseUrlDetect+configuration.method+"?q="+text+"&key="+configuration.API_KEY;

	request(url, function(error, response, body){

		if (!error) {
			var detectedLang = JSON.parse(body);
			resultLanguage = detectedLang.data.detections[0].language;
			request(configuration.baseUrlLanguages, function(error, response, languages){

				if (!error) {
					languages = JSON.parse(languages);
					var mylang = _.filter(languages, function(language) {return language.code == resultLanguage; });
					console.log(mylang[0].name);
					return mylang[0].name; 
				}
			});
		} else{
			console.log("This language is not supported");
			return "xx";
		}
	});
}

function languages()
{
	request(configuration.baseUrlLanguages, function(error, response, languages){

		if (!error) {
			console.log(JSON.parse(languages));
			return JSON.parse(languages);	
		}
	});
}

