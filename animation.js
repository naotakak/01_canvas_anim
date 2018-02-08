var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var id = 0;
var newX = 300;
var newY = 300;
var state = 0;
var size = 100;
var changeX = 1;
var changeY = 1;

document.getElementById("animate").addEventListener("click", animate);
document.getElementById("slate").addEventListener("click", draw);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("dvd").addEventListener("click", dvds);

function draw(e) {
  console.log("draw");
  e.preventDefault();
  newX = e.offsetX;
  newY = e.offsetY;
}

function dvds() {
  id = window.requestAnimationFrame(dvd);
}

function dvd() {
  clear();
  ctx.fillStyle = "#0000ff";
  ctx.beginPath();
  ctx.arc(newX, newY, size, 0, 2 * Math.PI);
  if (newX >= 600 - size) {
    changeX = -1 * Math.floor(Math.random() * 5);
  }
  if (newY >= 600 - size) {
    changeY = -1 * Math.floor(Math.random() * 5);
  }
  if (newX <= 0 + size) {
    changeX = 1 * Math.floor(Math.random() * 5);
  }
  if (newY <= 0 + size) {
    changeY = 1 * Math.floor(Math.random() * 5);
  }
  newX += changeX;
  newY += changeY;
  ctx.stroke();
  ctx.fill();
  id = window.requestAnimationFrame(dvd);
}

function animate() {
  id = window.requestAnimationFrame(circle2);
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
