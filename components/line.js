(function(){
	this.line = {
		title: "",
		dataPoints: [],
		labels: [],
		ratio: 0,
		maxYValue: 0,
		process: function(config){
			this.height = 0;
			this.width = 0;
			this.yMax = 0,
			this.xMax = 0;
			this.data = null;
			this.margin = { top: 40, left: 75, right: 0, bottom: 75 };
		},
		render: function(){}
	};
}).call(Graph.components);
