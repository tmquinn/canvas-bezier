var BOX_SIZE = 6;

var canvas = $('#canvas').get(0);
console.log(canvas);
var ctx = canvas.getContext('2d');
var cp1x = 50,
	cp1y = -50,
	cp2x = 150,
	cp2y = -50,
	x = 200,
	y = 0;

//move context to center x
ctx.translate(0,100);

//draw control points
ctx.save();
var haff = -BOX_SIZE/2;
ctx.translate(haff, haff);
ctx.strokeStyle = "red";
ctx.strokeRect(cp1x,cp1y,BOX_SIZE,BOX_SIZE);
ctx.strokeRect(cp2x,cp2y,BOX_SIZE,BOX_SIZE);
ctx.restore();

//draw control lines
ctx.save();
ctx.strokeStyle = "grey";
ctx.moveTo(cp1x,cp1y);
ctx.lineTo(0,0);
ctx.moveTo(cp2x,cp2y);
ctx.lineTo(x,y);
ctx.stroke();
ctx.restore();


ctx.beginPath();
ctx.moveTo(0,0);
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
ctx.stroke();

$(canvas).bind('mousedown', function (e) {
	
	$(canvas).bind('mousemove', function (e) {
		console.log(e);
	});
	
});