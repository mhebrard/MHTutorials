var http = require('http');
var fs = require('graceful-fs');

// variable to modify according your needs
var url = 'pokeapi.co'; // the base url of the API
var endpoint = 'api/v2/pokemon/'; // the specific enpoint
var request = '4/' // the specific query
var outputFile = '../Data/pokemon-4-stats.json'; // path of the output file

// run the query
query(url, `/${endpoint}${request}`, receive);

// query procedure
function query(url, path, callback) {
	var options = {
		host: url,
		port: 80,
		path: path,
		method: 'GET',
		headers: {
			'accept': '*/*',
			'Content-Type': 'application/json'
		}
	}

	var req = http.request(options, res => {
		res.setEncoding('utf8');
	  var body = '';
	  res.on('data', function(chunk){
	      body += chunk;
	  });
	  res.on('end', function(){
				callback(JSON.parse(body));
	  });
	});
	req.on('error', function(e){
	      console.log("error: ", e);
	});
	req.end();
}

// post processing on the response body
function receive(data) {
  console.log('response:', Object.keys(data));
  // extract stats property
  // transform Object to text
  // call writeFile function
  writeFile(JSON.stringify(data.stats));
}

// write the data in a file
function writeFile(data) {
  fs.appendFile(outputFile, data, err => {
		if(err) {console.log('error:', err);}
	});
	console.log('END');
}
