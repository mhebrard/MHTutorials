var fs = require('graceful-fs');
var scale = require('d3-scale');

// variable to modify according your needs
var input = '../Data/stats-pack.json'; // path of the input file
var w = 300 * 2; // width of the plan
var h = 300 * 2; // height of the plan
var radius = 4; // radius of the sphere
var outazymuth = 180 // azymut angle (degree) of the sphere where the plan will be mapped
var outpolar = 180 // polar angle (degree) of the sphere where the plan will be mapped
var output = '../Data/stats-packToSphere.json';

// read Json file
var data = require(input);
// plan to sphere coordinates
var nodes = mapSphere(data);
console.log(nodes);
// write the output
writeFile(JSON.stringify(nodes));


//from plan x,y,z to spherical coordinate
function mapSphere(data) {
  // angle of display > PI * degree / 180
  var maxazymuth = Math.PI * outazymuth / 180;
  var maxpolar = Math.PI * outpolar / 180;
  // map x,y from plan to azimut,polar in sphere, center on 0 > [-a/2, +a/2]
  var azymuth = scale.scaleLinear().domain([0, w]).range([maxazymuth / -2, maxazymuth / 2]);
  var polar = scale.scaleLinear().domain([0, h]).range([maxpolar / -2, maxpolar / 2]);

  var res = data.map(m => {
    return {name: m.name,
      value: m.value,
      r:m.r,
      x:radius * Math.sin(polar(m.y)) * Math.cos(azymuth(m.x)),
      y:radius * Math.sin(polar(m.y)) * Math.sin(azymuth(m.x)),
      z:radius * Math.cos(polar(m.y))
    };
  });
  return res;
}

// write the data in a file
function writeFile(data) {
  fs.appendFile(output, data, err => {
		if(err) {console.log('error:', err);}
	});
	console.log('END');
}
