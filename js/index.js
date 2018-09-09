var w = 600, h = 800, x = 0, y = 0;
var resizeTimer;

var greyscale = false;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

$(document).ready(function() {
  showLoader();
  generateStatic();
  hideLoader();
});

$(window).resize(function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    showLoader();
    generateStatic();
    hideLoader();
  }, 250);
});

function showLoader() {
  $("#content").hide();
  $("#welcome").show();
}

function hideLoader() {
  $("#welcome").hide();
  $("#content").show();
}

function generateStatic() {
  setDimensions();
  for (i = 0; i < w * h; i++) {
    x = i % w;
    y = Math.floor(i / w);

    ctx.fillStyle = 'rgb(' + generateRandomColour(greyscale).join(', ') + ')';
    ctx.fillRect(x, y, 1, 1);
  }
}

function generateRandomColour(greyscale) {
  var col = [];
  col[0] = getRandomInt(0, 255);

  for (c = 1; c < 3; c++) {
    if (greyscale) col[c] = col[0];
    else col[c] = getRandomInt(0, 255);
  }

  return col;
}

function setDimensions() {
  w = document.documentElement.clientWidth;
  h = document.documentElement.clientHeight;

  canvas.width = w;
  canvas.height = h;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}