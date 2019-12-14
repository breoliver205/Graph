var Graph = {};

Graph.__VERSION = "v1.0";
Graph.__NAME = "Graph";
Graph.__LENGTH = 0;

Graph.create = function(options = {}){
	let config = {}, type;
	options = Object.assign({}, options);
	function getValue(obj, keys){
		let res = null, i = 0;
		while (res === null && i < keys.length){ 
			if (keys[i] in obj){ res = obj[keys[i]]; break; }
			i++;
		}
		return res;
	}
	if ((type = getValue(options, ["name", "type"])) === null) type = "line";
	Object.entries(options).forEach(entry => { if (["name", "type"].indexOf(entry[0]) === -1) config[entry[0]] = entry[1]; });
	let GraphInstance = new Graph.Component(type, config);
	Graph.__LENGTH = Graph.__CACHE.push(GraphInstance);
};

Graph.Component = function(type, config){
	config = Object.assign({}, config);
	if (typeof type !== "string" || !(type in Graph.components)) type = "line";
	
	this.type = type;
	Object.assign(this, Graph.components);
};
