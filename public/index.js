document.addEventListener("DOMContentLoaded", function() {

  // 195x195
  const c = document.querySelector("#heptagon").getContext("2d");
  c.fillStyle = "#ffffff";
  c.strokeStyle = "#000000";
  c.lineWidth = 2;
  const cx = 97.5;
  const cy = 97.5;
  const size = 65;
  var px = 0;
  var py = 0;

  c.beginPath();
  const a = 180 + 360 / 7;
  const r = a * Math.PI / 180;
  c.moveTo(cx+(Math.sin(r)*size), cy+(Math.cos(r)*size));

  for (var i=0; i <= 7; i++) {
    var x = cx;
    var y = cy;
    const angle = 180 + 360 / 7 * i;
    const rad = angle * Math.PI / 180;

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
