let BAR_SCALE = -0.5;
let elem = document.getElementById('mainFrame');
let wheel = 0;
let places = {
  building_3_main: {
        texture: "https://i.imgur.com/TRW3kV5.jpeg",
        stencil: "https://i.imgur.com/iHRZiwM.png",
        objects: {
          "255,0,0": "building_3_left",
          "250,0,0": "building_3_right",
        }
      },
  building_3_left: {
      texture: "https://i.imgur.com/jevL9av.jpeg",
      stencil: "https://i.imgur.com/NUKbrbl.png",
      objects: {
        "255,0,0": "building_3_main",
        "250,0,0": "FirstBiulding",
      }
    },
  building_3_right: {
      texture: "https://i.imgur.com/MNpyChM.jpeg",
      stencil: "https://i.imgur.com/LGPWAL3.png",
      objects: {
        "255,0,0": "building_3_main",
        "250,0,0": "FirstBiulding",
      }
    }
};
let things = {
  FirstBiulding : "это первое здание Почтово-Телеграфного училища",
  Sobor: "",
  portrait : "",
  men: "",
  flag: "",
}


// if (elem.addEventListener) {
//       if ('onwheel' in document) {
//         // IE9+, FF17+, Ch31+
//         elem.addEventListener("wheel", onWheel);
//       } else if ('onmousewheel' in document) {
//         // устаревший вариант события
//         elem.addEventListener("mousewheel", onWheel);
//       } else {
//         // Firefox < 17
//         elem.addEventListener("MozMousePixelScroll", onWheel);
//       }
//     } else { // IE8-
//       elem.attachEvent("onmousewheel", onWheel);
//   }

function setBarScale(scale){
    BAR_SCALE = scale;
    if (BAR_SCALE > 9){
      BAR_SCALE = 9
    } else if (BAR_SCALE < 0){
      BAR_SCALE = 0
    }
    scalingBar();
    setStep();
}

function scalingBar(){
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
    if (BAR_SCALE == 0){
      document.getElementById("progressBarLine").style.width = `5px`;
    } else {
      document.getElementById("progressBarLine").style.width = `${172 * BAR_SCALE}px`;
    }
}

function changeTagName(el, newTagName) {
  var n = document.createElement(newTagName);
  var attr = el.attributes;
  for (var i = 0, len = attr.length; i < len; ++i) {
    n.setAttribute(attr[i].name, attr[i].value);
  }
  n.innerHTML = el.innerHTML;
  el.parentNode.replaceChild(n, el);
  return n;
}

function setStep(){
    switch(BAR_SCALE){
    case 0:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv">
              <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block;">Техническое училище Почтово-телеграфного ведомства</h3>
              <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> (1886−1891)</h4> 
              <p class = "text" id = "MainText"><img style="float: right; width: 400px; height: 250px;" src="img/Novoisakievskaya18.jpg">
              В 1885 году Министром внутренних дел графом Д.А. Толстым в Государственный Совет был представлены проекты Положения, Устава и Штата высшего учебного заведения под названием «Телеграфный Институт», открытие которого было обусловлено острой потребностью России в собственных инженерных кадрах в области электросвязи.</p>
              <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)'" onmouseout ="this.style.color = 'whitesmoke'" 
              onclick = "setBarScale(0.5)">войти внутрь</a>

           </div>`;
      elem = changeTagName(document.getElementById('mainFrame'), 'canvas');
      setPicture(2088,1174,'img/by_SPB_yellow_map_1882.png');
      break;
    case 0.5:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = ""
      elem = changeTagName(document.getElementById('mainFrame'), 'div');//https://i.imgur.com/GFLxXVV.jpg    комната: https://imgur.com/jevL9av комнатаpen https://i.imgur.com/NUKbrbl.png"
      setPanorama( {
        texture: "https://i.imgur.com/TRW3kV5.jpeg",
        stencil: "https://i.imgur.com/iHRZiwM.png",
        objects: {
          "255,0,0": "building_3_left",
          "250,0,0": "building_3_right",
        }
      });
      break;
    case 1:
      setPicture(w,h,src)
      break;
    case 1.5:
      setPicture(w,h,src)
      break;
    case 2:
      setPicture(w,h,src)
      break;
    case 2.5:
      setPicture(w,h,src)
      break;
    case 3:
      setPicture(w,h,src)
      break;
    case 3.5:
      setPicture(w,h,src)
      break;
    case 4:
      setPicture(w,h,src)
      break;
    case 4.5:
      setPicture(w,h,src)
      break;
    case 5:
      setPicture(w,h,src)
      break;
    case 5.5:
      setPicture(w,h,src)
      break;
    case 6:
      setPicture(w,h,src)
      break;
    case 6.5:
      setPicture(w,h,src)
      break;
    case 7:
      setPicture(w,h,src)
      break;
    case 7.5:
      setPicture(w,h,src)
      break;
    case 8:
      setPicture(w,h,src)
      break;
    case 8.5:
      setPicture(w,h,src)
      break;
    case 9:
      setPicture(w,h,src)
      break;
    }
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
}


function onWheel(e) {
  e = e || window.event;

  // wheelDelta не даёт возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;

  wheel+=delta
  if (wheel > 150) {
    BAR_SCALE+=0.5
    wheel = 0
    scalingBar(BAR_SCALE)
  } else if (wheel < -150){
    BAR_SCALE-=0.5
    wheel = 0
    scalingBar(BAR_SCALE)
  }

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

let line = document.getElementById('invisibleTriggerProgress');
let bar = document.getElementById('progressBar');
let bar2 = document.getElementById('progressBarLine');


bar.addEventListener("mouseover", lineBaR);
bar.addEventListener("mouseout", lineBaR);
bar2.addEventListener("mouseover", lineBaR);
bar2.addEventListener("mouseout", lineBaR);
line.addEventListener("mouseover", lineBaR);
line.addEventListener("mouseout", lineBaR);

function lineBaR(e) {
    if (e.type === "mouseover"){
       document.getElementById('progressBar').style.maxHeight = '40px';
       document.getElementById('progressBarLine').style.maxHeight = '40px';
    } 
    if (e.type === "mouseout"){
       document.getElementById('progressBar').style.maxHeight = '5px';
       document.getElementById('progressBarLine').style.maxHeight = '5px';
    }
}

onload = () => {
  document.getElementById("start").style.opacity = '0';
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