var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(200, 0);
ctx.lineTo(200, 200);
ctx.lineWidth = 150;
ctx.stroke();

ctx.moveTo(0, 100);
ctx.lineTo(400, 100);
ctx.lineWidth = 50;
ctx.stroke();
