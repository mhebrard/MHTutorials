var fs = require('graceful-fs');
var hierarchy = require('d3-hierarchy');

// variable to modify according your needs
var input = '../Data/pokemon-4-stats.json'; // path of the input file
var radius = 300 // radius of the container circle.
var output = '../Data/stats-pack.json'
// read Json file
var data = require(input);
// format data
var root = toPack(data);
// coompute the layout
var nodes = packing(root);
// You can use nodes as it is for d3 visualization
// but for sake of example we save it in a json file
// d3js create reference to parent node that conflict with stringify
// then we need to clean the object before save it
var json = toJson(nodes);
console.log(json);
// write the output
writeFile(JSON.stringify(json));


// extract data and format as a hierarchy (see d3-hierarchy)
function toPack(data) {
  var res = {name:'Stats', children:[]};
  data.forEach(f => {
    res.children.push({name:f.stat.name, value:f.base_stat})
  });
  return res;
}

// compute pack layout
function packing(data) {
  var layout = hierarchy.pack().size([radius * 2, radius * 2]);
  var res = layout(
    hierarchy.hierarchy(data)
    .sum(d => d.value)
  ).descendants().slice(1);
  return res;
}

// clean the objects
function toJson(data) {
  var res = data.map(m => {
    return {
      name:m.data.name,
      value:m.value,
      r:m.r,
      x:m.x,
      y:m.y
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
