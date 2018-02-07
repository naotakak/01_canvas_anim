var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var id = 0;
var newX = 0;
var newY = 0;

//document.getElementById("clear").addEventListener("click", clear);
document.getElementById("slate").addEventListener("click", draw);
document.getElementById("stop").addEventListener("click", stop);

function draw(e) {
  console.log("draw");
  e.preventDefault();
  newX = e.offsetX;
  newY = e.offsetY;
  window.requestAnimationFrame(circle2);
}

function circle2() {
  clear();
  ctx.fillStyle = "#0000ff";
  ctx.beginPath();
  ctx.arc(newX, newY, 100, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  console.log(id);
  newX += 5;
  id = window.requestAnimationFrame(circle2);
}

function stop() {
  window.cancelAnimationFrame(id);
}

function clear() {
  console.log("clear");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 600, 600);
}
