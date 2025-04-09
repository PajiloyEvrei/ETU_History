let BAR_SCALE = 0;
let elem = document.getElementById('mainFrame');
let wheel = 0;
let slide = 0;
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
        "255,0,0": "FirstBiulding",
        "250,0,0": "building_3_main",
      }
    },
  building_3_right: {
      texture: "https://i.imgur.com/MNpyChM.jpeg",
      stencil: "https://i.imgur.com/LGPWAL3.png",
      objects: {
        "255,0,0": "FirstBiulding",
        "250,0,0": "building_3_main",
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
let normal = true;

function setBarScale(scale){
    BAR_SCALE = scale;
    if (BAR_SCALE > 9){
      BAR_SCALE = 9
    } else if (BAR_SCALE < 0){
      BAR_SCALE = 0
    }
    document.getElementById("start").style.transition = 'opacity 2s';
    document.getElementById("start").style.opacity = '1';
    scalingBar();
    setTimeout(function(){
      document.getElementById("start").style.transition = 'opacity 4s';
      setStep();},2000)
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

function NormalMain(){
  document.getElementById("MainInfoDiv").style.transition = 'height 0s, padding 0s, top 0s, left 0s, right 0s';
  document.getElementById("MainInfoDiv").style.top = '20%';
  document.getElementById("MainInfoDiv").style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  document.getElementById("MainInfoDiv").className = "main row";
  document.getElementById("MainInfoDiv").style.fontSize = '40px';
  document.getElementById("MainInfoDiv").style.textAlign = 'left';
  document.getElementById("MainInfoDiv").style.transition = 'height 4s, padding 4s, top 4s, left 1.7s, right 4s';
}

let intervalRewind;
function rewind(rewindSpeed) {    
   clearInterval(intervalRewind);
   var startSystemTime = new Date().getTime();
   var startVideoTime = elem.currentTime;
   
   intervalRewind = setInterval(function(){
       elem.playbackRate = 1.0;
       if(elem.currentTime == 0){
           clearInterval(intervalRewind);
           elem.pause();
       } else {
           var elapsed = new Date().getTime()-startSystemTime;
           elem.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
       }
   }, 30);
}

function setStep(){
  slide = 0;
  document.getElementById("start").style.opacity = '0';
    switch(BAR_SCALE){
    case 0:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Рождение университета</h3>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"> Техническое училище Почтово-телеграфного ведомства</h4> 
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},5000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/1period3.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},1000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},2000)
      setTimeout(function(){nextSlide(1.7);timeScrollSlow(1,1)},5000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },6500);
      },10000);
      //setPicture(2088,1174,'img/by_SPB_yellow_map_1882.png');
      break;
    case 1:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Электротехнический институт <br> Александра III</h3>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"> </h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},4000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/Alexandr_III.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},0)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},0)
      setTimeout(function(){nextSlide(1.7);timeScrollSlow(1,1)},1400)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },3000);
      },4000);
      break;
    case 2:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">ЭТИ в начале XIV века</h3>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;">время перемен и потрясений</h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},4000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/ETUold.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},0)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},0)
      setTimeout(function(){nextSlide(1.7);timeScrollSlow(1,1)},1400)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },3000);
      },4000);
      break;
    case 2.5:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = ""
      elem = changeTagName(document.getElementById('mainFrame'), 'div');//https://i.imgur.com/GFLxXVV.jpg    комната: https://imgur.com/jevL9av комнатаpen https://i.imgur.com/NUKbrbl.png"
      setPanorama(places['building_3_right']);
      // {
      //   texture: "https://i.imgur.com/TRW3kV5.jpeg",
      //   stencil: "https://i.imgur.com/iHRZiwM.png",
      //   objects: {
      //     "255,0,0": "building_3_left",
      //     "250,0,0": "building_3_right",
      //   }
      // }
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

function newSlide(html,sp){
  if(sp < 0){
      document.getElementById("MainInfoDiv").style.transition = `height 4s, padding 4s, top 4s, left ${sp}s`;
      document.getElementById("MainInfoDiv").style.left = "100%";
      setTimeout(function(){ 
      document.getElementById("MainInfoDiv").style.transition = "height 4s, padding 4s, top 4s";
      document.getElementById("MainInfoDiv").style.left = "-100%";
      document.getElementById("MainInfoDiv").innerHTML = html;
      setTimeout(function(){ 
      document.getElementById("MainInfoDiv").style.transition = `height 4s, padding 4s, top 4s, left ${sp}s`;
      document.getElementById("MainInfoDiv").style.left = "0%";},600);
      },1700);
  }else{
      document.getElementById("MainInfoDiv").style.transition = `height 4s, padding 4s, top 4s, left ${sp}s`;
      document.getElementById("MainInfoDiv").style.left = "-100%";
      setTimeout(function(){ 
      document.getElementById("MainInfoDiv").style.transition = "height 4s, padding 4s, top 4s";
      document.getElementById("MainInfoDiv").style.left = "100%";
      document.getElementById("MainInfoDiv").innerHTML = html;
      setTimeout(function(){ 
      document.getElementById("MainInfoDiv").style.transition = `height 4s, padding 4s, top 4s, left ${sp}s`;
      document.getElementById("MainInfoDiv").style.left = "0%";},600);
      },1700);
    }
}

function renderSlide(sp){
  if(!normal){
    setTimeout(function(){NormalMain();},1000);
    normal = true;
  }
  switch(BAR_SCALE){
    case 0:
      switch(slide){
      case 1:
        newSlide(`<div>
              <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Рождение университета</h3>
              <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> Техническое училище Почтово-телеграфного ведомства</h4> 
              <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 500px; height: 300px;" src="img/telegraph19cen.jpg">
                В конце 19-го века в России проиходил бурный рост телеграфных линий, но почти все они обслуживались иностранными компаниями. Первый кто обратил внимание на проблему отсутсвия русских инженерных кадров в отрасли был Н.Г.Писаревский, видный общественный деятель , бывший в 1868 – 1885 годах инспектором Телеграфного ведомства.
             <br><br>   По инициативе Министерства внутренних дел и графа Д.А. 
              Толстого в 1885 году был разработан проект «Телеграфного Института», но 
              Государственный Совет его отклонил, потребовав доработки. Через год был предложен 
              компромиссный вариант — временное Техническое училище Почтово-телеграфного 
              ведомства, который получил одобрение императора Александра III. Училище 
              открылось в 1886 году в Санкт-Петербурге под руководством Н.Г. Писаревского, став 
              первым в стране специализированным электротехническим вузом. </p>
      </div>
              <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
              onclick = "nextSlide(1.7);timeScrollSlow(1,1)"> >> </div>`,sp);
        setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
      case 2:
        newSlide(`<div>
              <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block;">Техническое училище Почтово-телеграфного ведомства</h3>
              <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> (1886−1891)</h4> 
              <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 400px; height: 250px;" src="img/Novoisakievskaya18.jpg">
             Для Училища была приспособлена часть здания бывшего Телеграфного Департамента (Ново-Исаакиевская ул. д. 18).
            <br><br>Несмотря на отсутвие статуса высшего учебного заведения, Писаревский приглашал много известных учёных для преподаваня. 
            Первым преподавателем физики стал профессор СПбГУ О.Д. Хвольсон, автор классического курса физики, изданного в России, Франции и Германии, а преподавателем химии - также выпускник СПбУ будущий профессор ЭТИ А.А. Кракау - основатель научной школы электрохимии в России.</p> 
      </div>
              <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
              onclick = "nextSlide(1.7);timeScrollSlow(1,1)"> >> </div>`,sp);
        break;
      case 3:
        newSlide(`<div>
              <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block;">Техническое училище Почтово-телеграфного ведомства</h3>
              <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> (1886−1891)</h4> 
              <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 200px; height: 250px;" src="img/vojnarovskij.jpg">
             Из-за короткого срока обучения и долгой практики, которую студенты проходили отдалённых местах. Защитили диполмный проект и выпустилось очень мало людей, но многие из них в будущем стали известными учёными и стали сами преподавать.<br> Так в 1889 году из первого выпуска были оставлены для подготовки к преподавательской деятельности П.С. Осадчий и В.А. Триумфов, а в 1890 году – П.Д. Войнаровский, что свидетельствует о высоком уровне подготовки уже первых выпускников Училища.</p>
             <!-- <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
              onclick = "setBarScale(0.5)">войти внутрь</a> -->
      </div>
              <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
              onclick = "setBarScale(1)"> >> </div>`,sp);
        break
      }
      break;
    case 1:
      switch(slide){
        case 1:
          timeScrollSlow(1,1)
          newSlide(`<div>
                <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Преобразование в институт</h3>
                <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> </h4> 
                <p class = "text" id = "MainText">
                  11 (23) июня 1891 года император Александр III подписал указ о преобразовании Технического училища в Электротехнический института (ЭТИ) с четырехлетним сроком обучения. 
                  Учебный план был расширен до 20 дисциплин, из которых 7 – электротехнические, в Институте преподавали три иностранных языка. 
                  <br>Директором ЭТИ был назначен Н.Г. Писаревский, а инспектором – А.А. Кракау. Учащиеся стали называться студентами. 
                  Число студентов на всех курсах института было установлено в 120 человек, причем их обучение было бесплатным.</p>
        </div>
                <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                onclick = "nextSlide(1.7);timeScrollSlow(1,1)"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 2:
            timeScrollSlow(1,1.4)
            setTimeout(
              function(){ setVideo('video/T.mp4');
              elem.play();
              setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
              setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
            },2200);
            newSlide(`<div>
                  <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Новый директор</h3>
                  <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> Техническое училище Почтово-телеграфного ведомства</h4> 
                  <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 250px; height: 300px;" src="img/kachalov.jpg">
                    В связи со смертью Писаревского в июне 1895 года, директором ЭТИ был назначен Н.Н. Качалов. В своей деятельности на посту директора ЭТИ он многое сделал для его развития, реализуя планы, определённые ещё его предшественником. 
                    <br> В конце 1897 года старшекурсники ЭТИ были впервые направлены в заграничную поездку для прохождения производственной практики, которая состоялась благодаря спонсорской поддержке фирмы «Сименс».
                    <br> В 1899 году под руководством Кракау был введён курс электрохимии и организована первая в России электрохимическая лаборатория-практикум. </p>
          </div>
                  <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "nextSlide(1.7);timeScrollSlow(1,1)"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        case 3:
          timeScrollSlow(1,1)
          setTimeout(
            function(){ setVideo('video/Popov.mp4');
            elem.play();
            document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0)";
            document.getElementById("MainInfoDiv").className = "main";
            document.getElementById("MainInfoDiv").style.transition = 'height 0s, padding 0s, top 0s, left 0s, right 0s';
            document.getElementById("MainInfoDiv").style.textAlign = 'center'//height 4s, padding 4s, top 4s, left 4s, right 4s
            document.getElementById("MainInfoDiv").style.top = '65%';
            setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},0)
            setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},0)
          },2200);//2200
          normal = false;
          newSlide(`
                  <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;"></h3>
                  <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 40px; opacity: 0;  transition: opacity 2s;"> 
                  Ярким событием стало выступление 31(19) октября 1897 <br> преподавателя Минного офицерского класса А.С. Попова 
                   <br>с докладом «О беспроволочной телеграфии» 
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "setBarScale(2)"> >> </a> </h4>
                  `,sp);
          break;
      }
    case 2:
      switch(slide){
        case 1:
          timeScrollSlow(1,1)
          newSlide(`<div>
                <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Переезд на Аптекарский остров</h3>
                <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> </h4> 
                <p class = "text" id = "MainText">
                  Строительство институтского городка на Аптекарском острове стало важнейшим событием истории вуза в начале XX века. 
                  На его создание была затрачена колоссальная сумма – 1,6 млн. руб., что превышало расходы института за первые 15 лет его существования. 
                  Проектирование учебного корпуса выполнил академик архитекторы и преподаватель строительного дела в институте Александр Николаевич.
                  Учебный корпус ЭТИ строился с учётом последних достижений строительной науки и техники. 
                  К августу 1903 года все здания комплекса в основном были подготовлены, и институт перевели на Аптекарский остров.
</p>
        </div>
                <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                onclick = "nextSlide(1.7);timeScrollSlow(1,1)"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 2:
          timeScrollSlow(1,2)
          setTimeout(function(){
            //elem = changeTagName(document.getElementById('mainFrame'), 'div');
            //enderModel(elem);
            document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0)";
            document.getElementById("MainInfoDiv").className = "main";
            document.getElementById("MainInfoDiv").style.transition = 'height 0s, padding 0s, top 0s, left 0s, right 0s';
            document.getElementById("MainInfoDiv").style.textAlign = 'center'//height 4s, padding 4s, top 4s, left 4s, right 4s
            document.getElementById("MainInfoDiv").style.top = '65%';
            setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},0)
            setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},0)
          },2200);//2200
          normal = false;
          newSlide(`
                  <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;"></h3>
                  <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 40px; opacity: 0;  transition: opacity 2s;"> 
                  Здание ВУЗа на тот момент
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "setBarScale(2)"> >> </a> </h4>
                  `,sp);
        break;
        case 3: 
        break;
      }
      break;
    case 3:
      break;
    case 4:
      break;
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    }
}
let menu = false;
function showMenu() {
  if (menu){
    arrowUp()
    menu = false
  } else{
    arrowDown()
    menu = true
  }
}

function arrowUp(){
 document.getElementById('mainFrame').style.top = "10px";
 document.getElementById('mainFrame').style.height = "99%";
 document.getElementById('headerArrow').style.top = "10px";
 document.getElementById('menu').style.height = "0px";
 document.getElementById('headerArrow').innerHTML = "|<br>V";
 document.getElementById('headerArrow').style.color = "whitesmoke";
}

function arrowDown() {
 document.getElementById('mainFrame').style.top = "100px";
 document.getElementById('mainFrame').style.height = "90%";
 document.getElementById('headerArrow').style.top = "100px";
 document.getElementById('menu').style.height = "80px";
 document.getElementById('headerArrow').innerHTML = "^<br>|";
 document.getElementById('headerArrow').style.color = "black";
}

function setVideo(src){ //video/1period3.mp4
  elem.innerHTML = "";
  elem = changeTagName(document.getElementById('mainFrame'), 'video');
  elem.innerHTML = `<source src="${src}" type="video/mp4">`;
}

function nextSlide(sp){
  if(sp<0){
    slide-=1;
  }
  else{
    slide+=1;
  }  
  renderSlide(sp)
}

function onWheel(e) {
//   e = e || window.event;

//   // wheelDelta не даёт возможность узнать количество пикселей
//   var delta = e.deltaY || e.detail || e.wheelDelta;

//   wheel+=delta
//   if (wheel > 150) {
//     BAR_SCALE+=0.5
//     wheel = 0
//     scalingBar(BAR_SCALE)
//   } else if (wheel < -150){
//     BAR_SCALE-=0.5
//     wheel = 0
//     scalingBar(BAR_SCALE)
//   }

//   e.preventDefault ? e.preventDefault() : (e.returnValue = false);
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

function timeScrollSlow(sp,tim){
  clearInterval(intervalRewind);
  if(sp < 0){
    rewind
    clearInterval(intervalRewind);
    rewind(1.0 * sp * -1);
    elem.play()

    setTimeout(function(){
      setTimeout(function(){rewind(0.8 * sp);},200 * tim);
      setTimeout(function(){rewind(0.6 * sp);},250 * tim);
      setTimeout(function(){    
        clearInterval(intervalRewind);
        elem.playbackRate = 1.0;
        elem.pause();},450 * tim);
    },3550* tim);
  }
  else {
    clearInterval(intervalRewind);
    elem.playbackRate = 1.0 * sp;
    elem.play()

    setTimeout(function(){
      setTimeout(function(){elem.playbackRate = 0.8 * sp;},200 * tim);
      setTimeout(function(){elem.playbackRate = 0.6 * sp;},250 * tim);
      setTimeout(function(){elem.pause();},450 * tim);
    },3550* tim);
  }
}

function timeScrollFast(sp,tim){
  elem.play()
  elem.playbackRate = 1.0 * sp;
  setTimeout(function(){elem.playbackRate = 1.5 * sp;},200 * tim);
  setTimeout(function(){elem.playbackRate = 2.0 * sp;},300 * tim);
  setTimeout(function(){elem.playbackRate = 1.5 * sp;},400 * tim);
  setTimeout(function(){elem.playbackRate = 2.0 * sp;},500 * tim);
  setTimeout(function(){elem.playbackRate = 2.5 * sp;},600 * tim);
  setTimeout(function(){elem.playbackRate = 3.0 * sp;},700 * tim);
  setTimeout(function(){elem.playbackRate = 3.5 * sp;},800 * tim);

  setTimeout(function(){
    setTimeout(function(){elem.playbackRate = 4.5 * sp;},50 * tim);
    setTimeout(function(){elem.playbackRate = 3.5 * sp;},100 * tim);
    setTimeout(function(){elem.playbackRate = 2.5 * sp;},150 * tim);
    setTimeout(function(){elem.playbackRate = 1.5 * sp;},200 * tim);
    setTimeout(function(){elem.playbackRate = 0.5 * sp;},250 * tim);
    setTimeout(function(){elem.playbackRate = 0.1 * sp;},300 * tim);
    setTimeout(function(){elem.pause();},450 * tim);
  },4000 * tim);
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