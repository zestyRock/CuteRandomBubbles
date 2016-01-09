window.onload = function(){
	
	var dataArray = getData();
	
	d3.select('#bubbles').append('svg').attr('width', 800).attr('height', 800);

	setInterval(function(){
		dataArray.shift();
		dataArray.push(getRandomPoint());
		draw(dataArray);
	}, 200);
}

function draw(data){

	var svg = d3.select('svg');

	var circles = svg.selectAll('circle').data(data, dataKey);

	circles.enter().append('circle')
	.attr('r', function(d){ return d.r; })
	.attr('cx', function(d){ return d.cx*70 + 10;})
	.attr('cy', function(d){ return d.cy*40 + 10;})
	
	circles.attr('fill', function(d) {return 'rgb(' + 
		parseInt(d.r*25) + ',' + 
		parseInt(d.cx*10) + ',' + 
		parseInt(d.cy*15)+')' ; });

	circles.exit().remove();
}

function dataKey (d){
	console.log(d)
	return d.cx + '#' + d.cy;
}

function getRandomPoint(){
	var dataArray = [];
	var point = {};
	var rand = Math.random;
	point.cx = rand() * 10;
	point.r = rand() * 15;
	point.cy = rand()*10;

	return point;
}

function getData(){
	var dataArray = [];
	for(var i=0; i<100; i++){
		dataArray.push(getRandomPoint());
	}
	return dataArray;
}

