let BAR_SCALE = -0.5;

function setBarScale(scale){
    BAR_SCALE = scale;
    scalingBar()
}

function scalingBar(){
    if (BAR_SCALE > 9){
      BAR_SCALE = 9
    } else if (BAR_SCALE < -0.5){
      BAR_SCALE = -0.5
    }
    if(BAR_SCALE < 3){
        document.getElementById("progressBar").style.background = "#AD7B3C";
        document.body.style.color = "#AD7B3C"
        document.body.style.backgroundColor = "rgb(30, 30, 30)"
        document.getElementById("logo").src = "img/logo-etu_brown.png"
    } else if (BAR_SCALE >= 8){
        document.getElementById("progressBar").style.background = "#05336E";
        document.body.style.color = "#05336E"
        document.body.style.backgroundColor = "#D9D9D9"
        document.getElementById("logo").src = "img/logo-etu_blue.png";
    } else{
        document.getElementById("progressBar").style.background = "rgb(211,40,40)";
        document.body.style.color = "rgb(211,40,40)"
        document.body.style.backgroundColor = "rgb(46, 52, 64)"
        document.getElementById("logo").src = "img/logo-etu_red.png";
    }
    document.getElementById("progressBarLine").style.width = `${171.1 * BAR_SCALE}px`;
}

let elem = document.getElementById('mainFrame');
let wheel = 0;

if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}


function onWheel(e) {
  e = e || window.event;

  // wheelDelta не даёт возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;

  wheel+=delta
  if (wheel > 150) {
    BAR_SCALE+=0.5
    wheel = 0
  } else if (wheel < -150){
    BAR_SCALE-=0.5
    wheel = 0
  }
  scalingBar()

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
/*
let mainFrame = document.getElementById("mainFrame");
let context = mainFrame.getContext("2d");
let img = new Image(); // Создаёт новый элемент изображения
img.src = "img/SPB_yellow_map_1882.png";

img.onload = () => {
  context.drawImage(img,0,0, 2088, 1740,-100,-100,2088, 1740);
}


let mainFrame = document.getElementById("mainFrame");

let pic = i => `https://picsum.photos/id/${i}/100/100`

let images = [pic(33), pic(44), pic(55), pic(66), pic(77)];

images = images.map((src, i) => {
  let img = new Image();
  img.src = src;
  img.onload = e => draw(i);
  return img ;
});

function draw(index){
  ctx.drawImage(images[index], index * 110, Math.random()*75)
}
*/ 