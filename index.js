$(document).ready(function(){
    //195x195
    var c = $("#heptagon")[0].getContext('2d');
    c.fillStyle = "#ffffff";
    c.strokeStyle = "#000000";
    c.lineWidth = 2;
    var cx = 97.5;
    var cy = 97.5;
    var size = 65;
    var px = 0;
    var py = 0;

    c.beginPath();
    var a = 180 + 360 / 7;
    var r = a * Math.PI / 180;
    c.moveTo(cx+(Math.sin(r)*size), cy+(Math.cos(r)*size));

    for (var i=0; i <= 7; i++) {
	var x = cx;
	var y = cy;
	var angle = 180 + 360 / 7 * i;
	var rad = angle * Math.PI / 180;

	x += Math.sin(rad) * size;
	y += Math.cos(rad) * size;

	if (angle != 180) {
	    c.lineTo(x,y);
	}

	px = x;
	py = y;
    }

    c.closePath();
    c.stroke();
    c.fill();
});