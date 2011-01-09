var BOX_SIZE = 10;

function drawBCurve () {
	
	var haff = -BOX_SIZE/2,
		x = canvas.width,
		y = 0;
	
	var ctx = canvas.getContext('2d');
	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	ctx.save()
	//move context to center x
	ctx.translate(0,canvas.height/2);
	
	//draw control points
	ctx.save();
	ctx.translate(haff, haff);
	ctx.strokeStyle = "red";
	ctx.strokeRect(cp1.x,cp1.y,BOX_SIZE,BOX_SIZE);
	ctx.strokeRect(cp2.x,cp2.y,BOX_SIZE,BOX_SIZE);
	ctx.restore();
	
	//draw control lines
	ctx.save();
	ctx.strokeStyle = "grey";
	ctx.moveTo(cp1.x,cp1.y);
	ctx.lineTo(0,0);
	ctx.moveTo(cp2.x,cp2.y);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.restore();
	
	
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, x, y);
	ctx.stroke();
	
	ctx.restore();
}

/**
 * Main
 */
var cp1 = {x:50,y:-50};
var cp2 = {x:150,y:-50};

var cpDragging = null;

var canvas = $('#canvas').bind({
	mousedown: function (e) {
		//check for bounds of cp.
		var locX = e.offsetX + BOX_SIZE/2;
		var locY = (e.offsetY - 100) + BOX_SIZE/2;
		
		$.each([cp1, cp2], function (index, cp) {
			if (locX - cp.x > 0 && locX - cp.x < BOX_SIZE && locY - cp.y > 0 && locY - cp.y < BOX_SIZE ) {
				cpDragging = cp;
				cp.x = e.offsetX;
				cp.y = e.offsetY - 100;
				drawBCurve();
				return false;
			}
		});
	},
	mousemove: function (e) {
		if (cpDragging) {
			cpDragging.x = e.offsetX;
			cpDragging.y = e.offsetY - 100;
			drawBCurve();
		}
	},
	mouseup: function (e) {
		cpDragging = null;
	}
}).get(0);

drawBCurve(50,-50, 150, -50);