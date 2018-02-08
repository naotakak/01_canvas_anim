var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var id = 0;
var newX = 0;
var newY = 0;
var state = 0;
var size = 100;

document.getElementById("animate").addEventListener("click", animate);
document.getElementById("slate").addEventListener("click", draw);
document.getElementById("stop").addEventListener("click", stop);

function draw(e) {
  console.log("draw");
  e.preventDefault();
  newX = e.offsetX;
  newY = e.offsetY;
}

function animate() {
  window.requestAnimationFrame(circle2);
}

function circle2() {
  clear();
  ctx.fillStyle = "#0000ff";
  ctx.beginPath();
  if (state == 0) { //shrinking
    size --;
  }
  else {
    size ++;
  }
  ctx.arc(newX, newY, size, 0, 2 * Math.PI);
  if (size == 0) {
    state = 1;
  }
  if (size == 100) {
    state = 0;
  }
  ctx.stroke();
  ctx.fill();
  console.log(id);
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
