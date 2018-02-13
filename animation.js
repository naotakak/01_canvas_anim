var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var id = 0;
var newX = 300;
var newY = 300;
var state = 0;
var size = 100;
var changeX = 1;
var changeY = 1;

var logo = new Image();
logo.src = "dvd.png";

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
  window.cancelAnimationFrame(id);
  ctx.fillStyle = "#0000ff";
  ctx.beginPath();
  ctx.drawImage(logo, newX, newY, 100, 50);
  //ctx.arc(newX, newY, size, 0, 2 * Math.PI);
  if (newX >= 600 - 100) {
    changeX = -1 * Math.floor(Math.random() * 2);
  }
  if (newY >= 600 - 50) {
    changeY = -1 * Math.floor(Math.random() * 2);
  }
  if (newX <= 0) {
    changeX = 1 * Math.floor(Math.random() * 2);
  }
  if (newY <= 0) {
    changeY = 1 * Math.floor(Math.random() * 2);
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
  window.cancelAnimationFrame(id);
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
