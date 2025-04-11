let BAR_SCALE = 0;
let elem = document.getElementById('mainFrame');
let wheel = 0;
let slide = 0;
let bil = {
  "200,0,0": "main_1",
  "205,0,0": "left_1",
  "210,0,0": "right_1",
  "215,0,0": "main_2",
  "220,0,0": "forwr_2",
  "225,0,0": "main_5",
  "230,0,0": "left_5",
  "235,0,0": "right_5",
  "240,0,0": "left_3",
  "245,0,0": "main_3",
  "250,0,0": "right_3",
  "255,0,0": "main_0"
}

let places = {
  main_1: {
        texture: "https://i.imgur.com/0k8GTtU.jpeg",
        stencil: "https://i.imgur.com/ZpoQSsv.png",
        objects: bil
      },
  left_1: {
        texture: "https://i.imgur.com/IwGneXi.jpeg",
        stencil: "https://i.imgur.com/pR1fYhf.png",
        objects: bil
      },
  right_1: {
        texture: "https://i.imgur.com/4KIqJkv.jpeg",
        stencil: "https://i.imgur.com/MywCOG3.png",
        objects: bil
      },
  main_2: {
        texture: "https://i.imgur.com/3VfSIil.jpeg",
        stencil: "https://i.imgur.com/MC076mm.png",
        objects: bil
      },
  forwr_2: {
        texture: "https://i.imgur.com/Pu86cGQ.jpeg",
        stencil: "https://i.imgur.com/0oB8XNO.png",
        objects: bil
      },
  main_5: {
        texture: "https://i.imgur.com/3HePO6m.jpeg",
        stencil: "https://i.imgur.com/28kfOMf.png",
        objects: bil
      },
  left_5: {
        texture: "https://i.imgur.com/blgqeYh.jpeg",
        stencil: "https://i.imgur.com/0PhUSc5.png",
        objects: bil
      },
  right_5: {
        texture: "https://i.imgur.com/edH5Xsr.jpeg",
        stencil: "https://i.imgur.com/fl4XTxb.png",
        objects: bil
      },
  left_3: {
        texture: "https://i.imgur.com/Io3dFUf.jpeg",
        stencil: "https://i.imgur.com/kNncVXs.png",
        objects: bil
      },
  main_3: {
        texture: "https://i.imgur.com/zyZy4QG.jpeg",
        stencil: "https://i.imgur.com/BkbTtgP.png",
        objects: bil
      },
  right_3: {
        texture: "https://i.imgur.com/VCQD3NP.jpeg",
        stencil: "https://i.imgur.com/1v371VL.png",
        objects: bil
      },
  main_0: {
        texture: "https://i.imgur.com/ZqMq8LY.jpeg",
        stencil: "https://i.imgur.com/0roCkf0.png",
        objects: bil
      },




  build_1_per_1_main: {
        texture: "https://i.imgur.com/dsou4FN.jpeg",
        stencil: "https://i.imgur.com/acJgvum.png",
        objects: {
          "255,0,0": "build_1_per_1_right",
          "250,0,0": "build_1_per_1_left",
          "240,0,0": "build_1_per_1_main__flag",
        }
      },
  build_1_per_1_left: {
        texture: "https://i.imgur.com/22lWbSM.jpeg",
        stencil: "https://i.imgur.com/mLYqQFO.png",
        objects: {
          "255,0,0": "build_1_per_1_main",
          "250,0,0": "build_1_per_1_left__paris",
        }
      },
  build_1_per_1_right: {
        texture: "https://i.imgur.com/2bO65TX.jpeg",
        stencil: "https://i.imgur.com/vZQGQ35.png",
        objects: {
          "255,0,0": "build_1_per_1_main",
          "250,0,0": "build_1_per_1_right__telephone",
          "245,0,0": "build_2_per_1_main",
        }
      },
  build_2_per_1_main: {
        texture: "https://i.imgur.com/PqbiDTw.jpeg",
        stencil: "https://i.imgur.com/z1za87V.png",
        objects: {
          "255,0,0": "build_1_per_1_right",
          "250,0,0": "build_2_per_1_forw",
          "245,0,0": "build_2_per_1_main__women",
        }
      },
  build_2_per_1_forw: {
        texture: "https://i.imgur.com/Xa1Z2Ce.jpeg",
        stencil: "https://i.imgur.com/1qRpPwD.png",
        objects: {
          "255,0,0": "build_2_per_1_main",
          "250,0,0": "build_2_per_1_forw__plakat",
          "245,0,0": "",
        }
      },



  build_3_per_2_main: {
        texture: "https://i.imgur.com/qqXskCl.jpeg",
        stencil: "https://i.imgur.com/Ab8s39u.png",
        objects: {
          "250,41,5": "build_3_per_2_right",
          "242,39,4": "build_3_per_2_left",
          "234,37,4": "build_3_per_2_main__doska",
          "253,42,5": "build_3_per_2_main__lenin",
        }
      },
  build_3_per_2_left: {
        texture: "https://i.imgur.com/RwHDNqH.jpeg",
        stencil: "https://i.imgur.com/2mpRdll.png",
        objects: {
          "230,0,0": "build_3_per_2_main",
          "250,0,0": "build_3_per_2_left__chertez",
        }
      },
  build_3_per_2_right: {
        texture: "https://i.imgur.com/6gZp9lf.png",
        stencil: "https://i.imgur.com/LuzrFEy.png",
        objects: {
          "230,0,0": "build_3_per_2_main",
          "240,0,0": "build_3_per_2_right__paint",
          "220,0,0": "build_3_per_2_right__medal",
        }
      },



  build_5_per_3_main: {
        texture: "https://i.imgur.com/xw6QGk2.png",
        stencil: "https://i.imgur.com/Zplo3fR.png",
        objects: {
          "240,0,0": "build_5_per_3_right",
          "220,0,0": "build_5_per_3_left",
          "250,0,0": "build_5_per_3_main__journal",
          "230,0,0": "build_5_per_3_main__render",
        }
      },
  build_5_per_3_left: {
        texture: "https://i.imgur.com/bmPbulQ.png",
        stencil: "https://i.imgur.com/cL312r2.png",
        objects: {
          "250,0,0": "build_5_per_3_main",
          "240,0,0": "build_5_per_3_left__kubok",
          "230,0,0": "build_5_per_3_left__EVM",
        }
      },
  build_5_per_3_right: {
        texture: "https://i.imgur.com/XbZ4FUh.png",
        stencil: "https://i.imgur.com/LnFgr9o.png",
        objects: {
          "250,0,0": "build_5_per_3_main",
          "230,0,0": "build_5_per_3_right__orden",
        }
      },





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
  build_5_per_3_main__journal:'В 1970-х годах научные школы ЛЭТИ совершили прорыв в ключевых областях. Под руководством С.Я. Соколова разрабатывались методы ультразвуковой дефектоскопии для анализа структуры материалов, что стало основой неразрушающего контроля в промышленности. В.П. Вологдин создал технологии высокочастотной электротермии, которые нашли применение в металлургии и машиностроении, а Ю.Я. Юров заложил основы СВЧ-электроники, критически важные для радиолокационных и космических систем. В этом журнале сохранились записи экспериментов по синтезу новых электронных материалов, проводимых под руководством Н.П. Богородицкого, чьи работы стали фундаментом для развития электронной техники.',
  build_5_per_3_main__render:'На входе в 5 корпус была установлена памятная табличка',
  build_5_per_3_left__kubok:'Секция альпинизма ЛЭТИ в 1970-1980-х годах стала легендой благодаря достижениям своих спортсменов. Выпускник 1975 года Владимир Шатаев первым в СССР покорил зимой вершину Пика Коммунизма (7495 м), а команда института проложила 15 новых маршрутов на Памире, включая сложнейший подъём на Пик Ленина. За 75 лет существования секции её участники совершили 120 высотных экспедиций, завоевав 40 золотых медалей на чемпионатах СССР и воспитав трёх заслуженных мастеров спорта.',
  build_5_per_3_left__EVM:'Кафедра математического обеспечения ЭВМ, основанная в 1978 году В.И. Тимохиным, использовала эту машину для проектирования систем искусственного интеллекта. На ней моделировали обработку данных в гидроакустических комплексах подводных лодок и многоканальных космических системах. В 1980-х годах здесь была развернута первая в СССР вузовская вычислительная система коллективного пользования (ВСКП), которая обслуживала 30 лабораторий института, обеспечивая проведение сложных экспериментов и учебных проектов.',
  build_5_per_3_right__orden:'Орден был вручён ЛЭТИ в 1986 году к 100-летию за вклад в оборонную промышленность и подготовку специалистов. К юбилею открыли музей истории института с экспозицией, посвящённой разработкам для ВМФ и космических программ, а на фасаде здания установили мемориал «Воин со знаменем» в память о погибших на фронте сотрудниках. В торжествах участвовали 5000 выпускников, включая конструкторов систем ПВО и создателей первых советских ЭВМ, что подчеркнуло роль института в научно-техническом прогрессе страны.',

  build_3_per_2_main__doska:'В октябре 1945 года появились списки студентов-фронтовиков: из 2500 ушедших на войну вернулись 1800, среди них — будущий декан радиотехнического факультета С.И. Панфилов, награждённый двумя орденами Красной Звезды. К январю 1946 года в восстановленных лабораториях физики, электротехники и радиотехники уже шли занятия: в аудиториях стояли трофейные немецкие осциллографы Telefunken, а в мастерских собирали первые послевоенные радиоприёмники «Ленинград». К 1947 году на доске опубликовали итоговый отчёт: разобрали 12 бетонных ДОТов у корпусов, восстановили 85% оборудования, а в подвале 1-го корпуса открыли мемориальную комнату с именами 643 погибших студентов и преподавателей.',
  build_3_per_2_main__lenin:'За большие заслуги в подготовке инженерных кадров и достигнутые успехи в развитии научных исследований Указом Президиума Верховного Совета СССР от 7 января 1967 года Ленинградский электротехнический институт имени В.И. Ульянова (Ленина) был награждён орденом Ленина.',
  build_3_per_2_left__chertez:'Проект 1960-х, разработанный архитектором Г.А. Александровым, предполагал строительство двух корпусов площадью 15 тыс. м². В 5-м корпусе планировали разместить лаборатории микроэлектроники с «чистыми комнатами» для производства микросхем, а в 6-м — циклотрон для исследований по ядерной физике. На чертеже заметны пометки ректора Н.П. Богородицкого: «Выделить 200 м² под ВЦ» и «Синхрофазотрон — под вопросом». Часть планов реализовали к 1970-му: в 5-м корпусе открыли кафедру САПР, а вместо циклотрона установили ЭВМ «Минск-22» для расчётов траекторий спутников.',
  build_3_per_2_right__paint:'На снимке 1946 года запечатлены студенты и преподаватели, разбирающие завалы у второго корпуса. После возвращения из эвакуации в Челябинск коллектив ЛЭТИ своими силами восстанавливал аудитории: кирпичи для стен брали из разобранных блокадных баррикад на Васильевском острове, стекла для окон выменивали на продукты у моряков Балтфлота. К 1947 году в лабораториях радиотехники удалось собрать 18 рабочих мест с трофейными немецкими осциллографами Telefunken, а в мастерских наладили ремонт точных приборов для городских заводов. На заднем плане фото — группа фронтовиков в гимнастёрках: среди них будущий декан С.И. Панфилов, который позже вспоминал: «Мы таскали кирпичи днём, а ночью чертили схемы для первых советских телевизоров». Рядом с корпусами разбили сквер, где в 1948-м установили памятник 643 погибшим студентам и сотрудникам ЛЭТИ.',
  build_3_per_2_right__medal:'Медаль отчеканена к 50-летию инженерного электротехнического образования. На аверсе — профиль Александра Попова, на реверсе — даты «1898–1948» и силуэт главного корпуса ЛЭТИ. 26 июня 1948 года в Таврическом дворце 1200 гостей, включая академиков А.Ф. Иоффе и С.И. Вавилова, чествовали профессоров: В.И. Смирнова, читавшего лекции в блокаду, и А.Г. Граммакова, восстановившего лабораторию рентгеновских трубок. В рамках юбилея издали сборник «Труды ЛЭТИ» тиражом 500 экземпляров, где впервые опубликовали чертежи Попова из архива его дочери Е.А. Поповой-Кьяндской. 7 мая 1967 года, благодаря её усилиям, открыли мемориальную квартиру изобретателя в корпусе D с подлинным письменным столом и приборами 1890-х.',
  
  FirstBiulding : "Это первое здание Почтово-Телеграфного училища",
  build_1_per_1_main__flag: "В январе 1905 года студенты ЭТИ присоединились к массовым демонстрациям у Казанского собора, требуя политических реформ. После разгона протестов часть учащихся отчислили, а преподавателей, включая профессоров В.В. Скобельцына и М.А. Шателена, уволили за поддержку студентов. Эти события привели к временному закрытию института. Осенью 1905 года ЭТИ получил автономию, а директором избрали А.С. Попова, который разработал новый учебный план.",
  build_1_per_1_left__paris : "В 1900 году ЭТИ стал участником Всемирной выставки в Париже, где представил достижения своих выпускников в области электротехники и связи. Институт получил медаль и диплом в категории «Образование». Отдельно отметили работы А.С. Попова: за изобретения в сфере беспроводной телеграфии ему присудили Большую золотую медаль и высшую награду выставки — «Grand Prix». Это событие укрепило международный авторитет вуза и подтвердило его роль как центра электротехнической науки.",
  build_1_per_1_right__telephone: "Директор ЭТИ П.Д. Войнаровский в 1910-х годах спроектировал и построил самую протяженную в Европе телефонную линию между Москвой и Санкт-Петербургом. Проект стал эталоном для развития дальней связи в России. Войнаровский также читал в институте курс по передаче электроэнергии, заложив основы для создания новых направлений в электротехнике.",
  build_2_per_1_main__women: "В 1916 году, несмотря на военное время, ЭТИ начал принимать женщин, евреев и мусульман — ранее это запрещалось. Решение связано с нехваткой инженеров и необходимостью расширить набор на телеграфное и телефонное отделения. Это сделало институт одним из первых технических вузов России, открывших доступ к образованию для всех групп населения.",
  build_2_per_1_forw__plakat: "В годы Первой мировой войны ЭТИ выполнял военные заказы: профессор Н.А. Пушин с коллегами разработал технологию производства алюминия и оптического стекла из отечественного сырья. Ранее стекло для армии закупали в Германии. Химическая лаборатория института также производила материалы для радиостанций и военной техники, что помогло снизить зависимость России от импорта.",
}


let clickCheck = true;
let normal = true;

function setBarScale(scale){
    document.getElementById('next').style.opacity = '0';
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
        document.getElementById('headerArrow').style.color = "whitesmoke";
    } else if (BAR_SCALE >= 8){
        document.getElementById("progressBar").style.background = "#05336E";
        document.body.style.color = "#05336E"
        document.body.style.backgroundColor = "#D9D9D9"
        document.getElementById("logo").src = "img/logo-etu_blue.png";
        document.getElementById('headerArrow').style.color = "whitesmoke";
    } else{
        document.getElementById("progressBar").style.background = "rgb(211,40,40)";
        document.body.style.color = "rgb(211,40,40)"
        document.getElementById('headerArrow').style.color = "black";
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
  setTimeout(function(){document.getElementById("MainInfoDiv").style.transition = 'height 4s, padding 4s, top 4s, left 1.7s, right 4s';},100);
}
let scrolling = false;
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
  clickCheck = false;
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
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Электротехнический институт</h3>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;">ЭТИ</h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},4000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/Alexandr_III.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},0)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},0)
      setTimeout(function(){nextSlide(2);timeScrollSlow(1,1)},2000)
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
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"></h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},2500)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/ETUold.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},1000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},1000)
      setTimeout(function(){nextSlide(2);timeScrollSlow(1,1)},2000)
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
      setPanorama(places['build_1_per_1_main']);
      break;
    case 3:
            elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Перерождение института</h3>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;">ЛЭТИ им. Ульянова</h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},3000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/lenin.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},400)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},400)
      setTimeout(function(){nextSlide(2);timeScrollSlow(1,1)},2000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },4000);
      },4000);
      break;
    case 4:
            elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">30-e годы</h3> <br>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"></h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},3000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/gulag.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},400)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},400)
      setTimeout(function(){nextSlide(2);timeScrollSlow(1,1)},2000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },3000);
      },4000);
      break;
    case 5:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Великая Отечественная война</h3>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"> участие ЛЭТИ в ВОВ</h4> 
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},5000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/1945-2.mp4');
      elem.play()
      elem.loop  = "loop"
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},1000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},2000)
      setTimeout(function(){nextSlide(1.7)},5000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },6500);
      },7000);
      break;
    case 6:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Развитие в послевоенные годы</h3> <br>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"></h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},3000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/1969.mp4');
      elem.play()
      elem.loop = "loop"
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},400)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},400)
      setTimeout(function(){nextSlide(2)},2000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },3000);
      },6000);
      break;
    case 6.5:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = ""
      elem = changeTagName(document.getElementById('mainFrame'), 'div');//https://i.imgur.com/GFLxXVV.jpg    комната: https://imgur.com/jevL9av комнатаpen https://i.imgur.com/NUKbrbl.png"
      setPanorama(places['build_3_per_2_main']);
      break;
    case 7:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">80-e годы</h3> <br>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;">Ориентация ЛЭТИ на новейшие научные направления</h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},3000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/bass.mp4');
      elem.play()
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},400)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},400)
      setTimeout(function(){nextSlide(2);timeScrollSlow(1,1)},2000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },3000);
      },5000);
      break;
    case 7.5:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = ""
      elem = changeTagName(document.getElementById('mainFrame'), 'div');//https://i.imgur.com/GFLxXVV.jpg    комната: https://imgur.com/jevL9av комнатаpen https://i.imgur.com/NUKbrbl.png"
      setPanorama(places['build_5_per_3_main']);
      break;
    case 8:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">Наши дни</h3><br>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;"> СПбГЭТУ "ЛЭТИ"</h4> 
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},5000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/2020-2.mp4');
      elem.play()
      elem.loop  = "loop"
      setTimeout(function(){
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '0'},1000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '0'},2000)
      setTimeout(function(){nextSlide(1.7)},5000)
      setTimeout(function(){document.getElementById("MainInfoDiv").style.textAlign = 'left';
        document.getElementById("MainInfoDiv").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("MainInfoDiv").className = "main row";
      },6500);
      },7000);
      break;
    case 8.5:
      elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = ""
      elem = changeTagName(document.getElementById('mainFrame'), 'div');//https://i.imgur.com/GFLxXVV.jpg    комната: https://imgur.com/jevL9av комнатаpen https://i.imgur.com/NUKbrbl.png"
      setPanorama(places['main_1']);
      break;
    case 9:
            elem.innerHTML = "";
      document.getElementById("mainInfo").innerHTML = `<div class = "main" id = "MainInfoDiv" style="left:0; text-align: center; background-color: rgba(0,0,0,0)">
              <h3 class = "main hedline shadow" id = "MainHeadline" style = "display: inline-block;font-size: 100px; font-weight : 4px; opacity: 0; transition: opacity 2s;">ЛЭТИ сковозь историю</h3> <br>
              <h4 class = "main info shadow" id = "MainHeadinfo" style = "display: inline-block; font-size: 50px; opacity: 0;  transition: opacity 2s;">работа выполнена командой "c.cpp"</h4>
      </div>`;
      setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},2000)
      setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},3000)
      elem = changeTagName(document.getElementById('mainFrame'), 'video');
      setVideo('video/ETUnow.mp4');
      elem.play()
      setTimeout(function(){elem.pause()},5000);
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
  if(!scrolling){
    setTimeout(function(){clickCheck = true},2500);
  }
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
      document.getElementById("MainInfoDiv").style.transition = 'height 0s, padding 0s, top 0s, left 0s, right 0s';
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
   setTimeout(function(){NormalMain();},1700);
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
              onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1);clickCheck = false}"> >> </div>`,sp);
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
              onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1);clickCheck = false}"> >> </div>`,sp);
        break;
      case 3:
        newSlide(`<div>
              <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block;">Техническое училище Почтово-телеграфного ведомства</h3>
              <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> (1886−1891)</h4> 
              <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 200px; height: 250px;" src="img/vojnarovskij.jpg">
             Из-за короткого срока обучения и долгой практики, которую учащиеся проходили отдалённых местах. Защитили диполмный проект и выпустилось очень мало людей, но многие из них в будущем стали известными учёными и стали сами преподавать.<br> Так в 1889 году из первого выпуска были оставлены для подготовки к преподавательской деятельности П.С. Осадчий и В.А. Триумфов, а в 1890 году – П.Д. Войнаровский, что свидетельствует о высоком уровне подготовки уже первых выпускников Училища.</p>
              </div>
              <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
              onclick = "if(clickCheck){setBarScale(1);clickCheck = false}"> >> </div>`,sp);
        break
      }
      break;
    case 1:
      switch(slide){
        case 1:
          newSlide(`<div>
                <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Преобразование в институт</h3>
                <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> </h4> 
                <p class = "text" id = "MainText">
                  11 (23) июня 1891 года император Александр III подписал указ о преобразовании Технического училища в Электротехнический институт (ЭТИ) с четырехлетним сроком обучения. 
                  Учебный план был расширен до 20 дисциплин, из которых 7 – электротехнические, в Институте преподавали три иностранных языка. 
                  <br>Директором ЭТИ был назначен Н.Г. Писаревский, а инспектором – А.А. Кракау. Учащиеся стали называться студентами. 
                  Число студентов на всех курсах института было установлено в 120 человек, причем их обучение было бесплатным.</p>
        </div>
                <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 2:
            setTimeout(
              function(){ setVideo('video/T.mp4');
              elem.play();
              setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
              setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
            },2200);
            newSlide(`<div>
                  <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Новый директор</h3>
                  <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> Электротехнический институт </h4> 
                  <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 250px; height: 300px;" src="img/kachalov.jpg">
                    В связи со смертью Писаревского в июне 1895 года, директором ЭТИ был назначен Н.Н. Качалов. В своей деятельности на посту директора ЭТИ он многое сделал для его развития, реализуя планы, определённые ещё его предшественником. 
                    <br> В конце 1897 года старшекурсники ЭТИ были впервые направлены в заграничную поездку для прохождения производственной практики, которая состоялась благодаря спонсорской поддержке фирмы «Сименс».
                    <br> В 1899 году под руководством Кракау был введён курс электрохимии и организована первая в России электрохимическая лаборатория-практикум. </p>
          </div>
                  <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1);clickCheck = false}"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        case 3:
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
                  onclick = "if(clickCheck){setBarScale(2);clickCheck = false}"> >> </a> </h4>
                  `,sp);
          break;
      }
      break;
    case 2:
      switch(slide){
        case 1:
          newSlide(`<div>
                <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Переезд на Аптекарьский остров</h3>
                <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> </h4> 
                <p class = "text" id = "MainText">
                  Строительство институтского городка на Аптекарском острове стало важнейшим событием истории вуза в начале XX века. 
                  На его создание была затрачена колоссальная сумма – 1,6 млн. руб., что превышало расходы института за первые 15 лет его существования. 
                  Проектирование учебного корпуса выполнил академик архитекторы и преподаватель строительного дела в институте Александр Николаевич.
                  Учебный корпус ЭТИ строился с учётом последних достижений строительной науки и техники. 
                  К августу 1903 года все здания комплекса в основном были подготовлены, и институт перевели на Аптекарский остров.</p> </div>
                <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 2:
          setTimeout(function(){
            setVideo('video/model 1-C.mp4');
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
                  Здания ВУЗа на тот момент
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){setBarScale(2.5);clickCheck = false}"> Войти внутрь </a> </h4>
                  `,sp);
        break;
      }
      break;
    case 3:
      switch(slide){
        case 1:
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
                  Февральская революция, октябрьский переворот и гражданская война. Это было тяжелое время для страны, но институт вышел из него ещё более значимым чем до этого. 
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </a> </h4>
                  `,sp);
        break;
        case 2:
              setTimeout(
                function(){ setVideo('video/GOELRO.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Важная роль</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;">Институт на гребене новой власти</h4> 
                    <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 400px; height: 250px;" src="img/TEC.jpg">
                       Советская власть планировала индустриализацию и электрофикацию. Важнейшее значение в этом имел Государственный план электрификации России (ГОЭЛРО), который был разработан в рекордно короткие сроки. Этому в немалой степени способствовали предварительные изыскания и разработанные учеными ЭТИ до 1916 года проекты.
                       <br> ЭТИ играл в важную роль. Преподавали учавствовали в строительстве многих ТЭЦ, ГЭС, проведении магистралей тепло и энергоснабжения</p>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        case 3:
            setTimeout(function(){
            //elem = changeTagName(document.getElementById('mainFrame'), 'div');
            //enderModel(elem);v
            setVideo('video/GES.mp4');
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
                  Важным событием стало строительство Волховской ГЭС, которое возглавлял Г.О. Графтио
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){setBarScale(4);clickCheck = false}"> >> </a> </h4>
                  `,sp);
        break;
        }
      break;
    case 4:
      switch(slide){
        case 1:
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
                  Начинаются гонения на интеллигенцию. Это были ощутимые потери среди ученых, надолго, и даже навсегда, оторванных из-за репрессий от творческой и научной деятельности.
                  <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </a> </h4>
                  `,sp);
        break;
        case 2:
              setTimeout(
                function(){ setVideo('video/vologodin.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Развитие в тяжелые времена</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"></h4> 
                    <div class = "text" id = "MainText">
                    <p>
                    Но несмотря на все сложности вуз продолжал развиваться.
                    </p>
                    <p> 
                    <img style="margin-left :10px; position: relative; bottom: 25px; float: right; width: 200px; height: 250px;" src="img/church.jpg"> В 1931 году «акустический уклон», организованный в 1929 году в рамках кафедры специального курса радиотехники, был выделен в самостоятельную кафедру акустики. Здание бывшего Храма Преображения Господня переделали в лабораторию электроакустики. С.Я. Соколов был утвержден в должности профессора по кафедре технической акустики.  В 1937 году образец звукового дефектоскопа был принят и запущен в промышленное производство. Работы С.Я. Соколова на много лет опередили работы зарубежных ученых в этой области и сыграли большую роль в повышении обороноспособности страны в годы Великой Отечественной войны.
                    </p>
                     <p> 
                    <img style="margin-right:10px;float: left; width: 250px; height: 200px;" src="img/laboratoriya-smurova.jpg"> А.А. Смуровым была создана научная школа по технике высокого напряжения и передаче электрической энергии на дальние расстояния, которая дала стимул развитию новых научных направлений, в частности, изучению свойств диэлектрических материалов. Научно-исследовательская лаборатория техники высоких напряжений в 1937 году получила имя проф. А.А. Смурова. В настоящее время в помещении лаборатории открыт инжиниринговый центр «Навигация и управление движением».
                    </p>
                </div>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){setBarScale(5);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        }
      break;
    case 5:
      switch(slide){
        case 1:
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
                   1941-й год 22 июня. Без объявления войны Германия вторглась на территорию Советского Союза, нарушив пакт о ненападении.
                  <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                   
                  onclick = "                  if(clickCheck){
                    document.getElementById('start').style.opacity = '1'; 
                    setTimeout(function(){
                    nextSlide(3);timeScrollSlow(3,1);
                    setTimeout(function(){document.getElementById('start').style.opacity = '0'},2000)},4000);clickCheck = false
                  }"> >> </a> </h4>
                  `,sp);
        break;
        case 2:
              setTimeout(
                function(){ setVideo('video/city_wow.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Начало войны</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"</h4> 
                    <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 400px; height: 250px;" src="img/elektrosila.jpg">
                    С первых дней Великой Отечественной войны в партийный комитет ЛЭТИ стали поступать заявления от студентов, преподавателей, рабочих и служащих с просьбой о добровольной отправке в ряды Красной Армии на фронт.
                    <br><br>
                    Кроме заявок в ЛЭТИ организовывали отряды местной противоздушной обороны, многие мастерские и лаборатории переделывали в производство военной продукции и делали многое другое для подготовки людей и помощи фронту.
                    </p>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
      case 3:
              setTimeout(
                function(){ setVideo('video/ladoga.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Эвакуация института</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"</h4> 
                    <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 400px; height: 250px;" src="img/lab.png">
                    Было понятно, что с началом блокады необходимо эвакуировать из Ленинграда научные лаборатории, результаты работ которых в значительной степени определяли обороноспособность страны.
                    <br><br>
                    По постановлению правительства в конце декабря 1941 г. научные лаборатории проф. В.П. Вологдина и проф. С.Я. Соколова были эвакуированы в глубокий тыл.
                    13 марта 1942 г., институт был эвакуирован из города и по знаменитой Ладожской ледовой дороге выехал на Большую землю.
                    </p>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        case 4:
              setTimeout(
                function(){ setVideo('video/moryaki.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Судьба пустых корпусов</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"</h4> 
                    <p class = "text" id = "MainText"><img style="float: right;margin-left:10px; width: 400px; height: 250px;" src="img/bunker.png">
                    Наполовину опустевшие помещения первого и второго институтских корпусов в конце зимы 1941 г. заняли моряки Краснознаменного Балтийского флота, которые перебазировали сюда Политическое управление Краснознамённого Балтийского флота и ряда других служб. Здание корпусов моряки существенно укрепляли на случай бомбежек
                    <br><br>
                    По заданию Ленинградского военного округа и военных организаций города коллектив научных работников института принял на себя ряд актуальных исследовательских тем и заказов. Тематика научных работ кафедр была изменена в соответствии с запросами фронта. Наиболее крупные лаборатории совместно с учебно-производственными мастерскими организовали производства специальных приборов. 
                    </p>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){setBarScale(6);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        }
      break;
    case 6:
      switch(slide){
        case 1:
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
                  После воcстановления от войны.<br> ЛЭТИ начал серьёзно расширяться
                  <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "                  if(clickCheck){
                    document.getElementById('start').style.opacity = '1'; 
                    setTimeout(function(){
                    nextSlide(3);timeScrollSlow(3,1);
                    setTimeout(function(){document.getElementById('start').style.opacity = '0'},2000)},4000);clickCheck = false
                  }"> >> </a> </h4> </h4>
                  `,sp);
        break;
        case 2:
              setTimeout(
                function(){ setVideo('video/3-korpus.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Расширение учебной и материальной базы</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"></h4> 
                    <div class = "text" id = "MainText">
                    <p>
                    Юбилейная комиссия под председательством академика Г.О. Графтио добилась Решения Совета Министров СССР (от 15.08.1948 г.) о расширении учебной и материальной базы института, что позволило увеличить прием на первый курс до 600 человек, получить средства на строительстве новых учебных корпусов института, общежития для студентов и жилья для преподавателей и сотрудников института.
                    </p>
                    <p> 
                    <img style="margin-right:10px;float: left; width: 250px; height: 200px;"src="img/7 корпус.jpg">К 1956 году был построен административно-учебный корпус института (3 корпус), что увеличило площадь ЛЭТИ почти на 40 % (10 тыс. кв. м.). Институт получил: актовый зал на 500 человек, новые просторные помещения для библиотеки и общеинститутских кафедр – математики, физики, иностранных языков, общественных наук
                    </p>
                     <p> 
                    Были также присоединены  4 и 7 корпуса.
                    </p>
                </div>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        case 3:
              setTimeout(
                function(){ setVideo('video/students.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Богатая студенческая жизнь</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"></h4> 
                    <div class = "text" id = "MainText">
                    <p>
                    Студенческая жизнь в ЭТИ – ЛЭТИ всегда была очень активной – работали студенческое научное общество, художественные и спортивные секции, хор, литобъединение при газете «Электрик».
                    </p>
                    <p>
                    <img style="margin-right:10px;float: right; width: 250px; height: 200px;"src="img/stroika.jpg">В 1949 году по решению комитета ВЛКСМ института для оказания помощи Оятскому району Ленинградской области в строительстве Красноборской ГЭС в ЛЭТИ был организован первый студенческой строительный отряд. Предстояло электрифицировать 15 колхозов и совхозов. Силами дипломников кафедры центральных электрических станций был разработан проект создания Красноборской ГЭС на 100 кВт. 4 июля началась стройка. Запустили Красноборскую ГЭС 15 октября 1949 года. Участником строительства был выпускник ЛЭТИ 1952 года Жорес Алфёров.
                    </p>
                    <p> 
                    <img style="margin-right:10px;float: left; width: 250px; height: 200px;"src="img/Spring_at_LETI.jpg">«Весна в ЛЭТИ» – легендарный студенческий сатирический спектакль - впервые был показан 11 мая 1953 года. В постановку были вовлечены все коллективы художественной самодеятельности (театральный, эстрадный оркестр, хор, хореографический, певцы-солисты, кинолюбители). С огромным успехом спектакль был показан на сценах дворцов культуры Ленинграда и Москвы, отмечен премиями ЦК профсоюзов работников культуры.
                    </p>
                </div>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
        break;
        case 4:
          setTimeout(function(){
            setVideo('video/model 4-7.mp4');
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
                  Здания ВУЗа на тот момент
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){setBarScale(6.5);clickCheck = false}"> Войти внутрь </a> </h4>
                  `,sp);
        break;
        }
      break;
    case 7:
      switch(slide){
        case 1:
          newSlide(`<div>
                <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;"> Новые направления </h3>
                <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> </h4> 
                <p class = "text" id = "MainText">
                  Учитывая новые тенденции в развитии уже сформировавшихся научных направлений, учёный совет института по запросу факультетов и кафедр, с учётом организационной целесообразности, принимал решения о внесении соответствующих изменений в структуру факультетов и в названия кафедр.
                  <br> <br> 1973 году из состава кафедры автоматики и телемеханики, руководимой профессором А.А. Вавиловым, выделилась кафедра электронных и магнитных цепей (с 1984 г. кафедра систем автоматизированного проектирования (САПР)) во главе (1973–1997) с профессором В.И. Анисимовым (1973-1997). В 1982 году из состава кафедры автоматики и телемеханики выделилась кафедра автоматизированных систем обработки информации и управления (АСОиУ) (с 2018 г. – кафедра информационных систем (ИС)) во главе с профессором Б.Я. Советовым, у истоков кафедры стояли профессора Р.И. Юргенсон и А.И. Губинский.</p> </div>
                <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 2:
              setTimeout(
                function(){ setVideo('video/men.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
          newSlide(`<div>
                <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;"> Первый </h3>
                <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"> </h4> 
                <p class = "text" id = "MainText">
                  <img style="float: right; width: 200px; height: 250px;"src="img/vavilov.jpg">ЛЭТИ стал одним из ведущих вузов страны, где были созданы первые проблемные и отраслевые научные лаборатории. Сеть базовых кафедр включала: базовую кафедру оптоэлектроники в ФТИ имени А.Ф. Иоффе АН СССР (1973), базовую кафедру автоматизации исследований в ЛИИА АН СССР (1974), базовую кафедру информационных систем в ЛНПО «Красная заря» (1974), базовую кафедру конструирования и технологии электронной аппаратуры в ЛНПО «Океанприбор» (1977), базовую кафедру средств специальной радиоэлектроники в НИИ «Вектор» (1978).
                  <br> <br> Деятельность ректора института профессора А.А. Вавилова, члена-корреспондента АН СССР (1976), способствовала дальнейшему развитию и укреплению института. За годы его руководства институтом число докторов наук в ЛЭТИ увеличилось почти вдвое и превысило 100 человек. С 1975 по 1983 годы А.А. Вавилов был председателем Совета ректоров Ленинграда. ЛЭТИ принимал активное участие в создании, становлении новых родственных вузов, факультетов, кафедр, таких как Новосибирский электротехнический, Дальневосточный политехнический, Рязанский и Таганрогский радиотехнические, Пензенский и Новгородский политехнический и др. При прямом участии ЛЭТИ было создано свыше 80 новых выпускающих кафедр в периферийных вузах страны.</p> </div>
                <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
          setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 3:
          setTimeout(function(){
            setVideo('video/5-korpus.mp4');
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
                  В 1989 году было завершено строительство 5-го корпуса, что позволило решить жизненно-важную для института проблему – к общей площади института добавилось еще 29 тысяч кв. метров аудиторий, лабораторий, пищеблоков.
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </a> </h4>
                  `,sp);
          break;
        case 4:
          setTimeout(function(){
            setVideo('video/model 5.mp4');
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
                  Здание ВУЗа на тот момент
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){setBarScale(7.5);clickCheck = false}"> Войти внутрь </a> </h4>
                  `,sp);
        break;
      }
      break;
    case 8:
      switch(slide){
        case 1:
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
                   В 1992 году ЛЭТИ получил статус технического университета и новое название – «Санкт-Петербургский государственный электротехнический университет имени В.И. Ульянова» (СПбГЭТУ)
                  <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "
                  if(clickCheck){
                    document.getElementById('start').style.opacity = '1'; 
                    setTimeout(function(){
                    nextSlide(3);timeScrollSlow(3,1);
                    setTimeout(function(){document.getElementById('start').style.opacity = '0'},2000)},4000);clickCheck = false
                  }
                  "> >> </a> </h4>
                  `,sp);
          break;
        case 2:
              setTimeout(
                function(){ setVideo('video/ETUphoto.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">Статус университета и реорганизация</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"</h4> 
                    <p class = "text" id = "MainText">
                    В 1992 году ЛЭТИ (Ленинградский электротехнический институт) был преобразован в Санкт-Петербургский государственный электротехнический университет (СПбГЭТУ) с сохранением исторического названия «ЛЭТИ» и именем В.И. Ульянова (Ленина).
                    Это означало расширение научно-образовательной деятельности, включение новых направлений и повышение престижа вуза.
                    <br><br>
                    Был создан гуманитарный факультет, что расширило профиль подготовки за счёт социально-экономических и филологических дисциплин.
                    <br><br>
                    Университет перешел от советской системы к балонской(бакалавриату и магистратуре).
                    <br><br>
                    В 1999 году решением ученого совета была утверждена новая структура вуза (7 факультетов):
                    <ul class = "text" style="list-style-type: square; position: relative; top: -30px; width: 500px">
                      <li>радиотехники и телекоммуникаций(<b>ФРТ</b>)</li>
                      <li>электроники(<b>ФЭЛ</b>)</li>
                      <li>компьютерных технологий и информатики(<b>ФКТИ</b>)</li>
                      <li>электротехники и автоматики(<b>ФЭА</b>)</li>
                      <li>приборостроения, биомедицинской и экологической инженерии(<b>ФПБЭИ</b>)</li>
                      <li>экономики и менеджмента(<b>ФЭМ</b>)(с 2019 <b>ИНПРОТЕХ</b>)</li>
                      <li>гуманитарный факультет(<b>ГФ</b>)</li>
                    </ul>
            </div>
                    <div id ="rightArrow" style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                    onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        case 3:
          setTimeout(function(){
            setVideo('video/alferov.mp4');
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
                  В 2000 году выпускнику ЛЭТИ академику Жоресу Ивановичу Алферову присудили Нобелевскую премию по физике за работы, в рамках которых была решена проблема создания гетеролазерных структур.
                   <br> <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){nextSlide(1.7);timeScrollSlow(1,1.4);clickCheck = false}"> >> </a> </h4>
                  `,sp);
          break;
        case 4:
                        setTimeout(
                function(){ setVideo('video/ETUphoto.mp4');
                elem.play();
                setTimeout(function(){document.getElementById("MainHeadline").style.opacity = '1'},500)
                setTimeout(function(){document.getElementById("MainHeadinfo").style.opacity = '1'},500)
              },2200);
              newSlide(`<div>
                    <h3 class = "main hedline" id = "MainHeadline" style = "display: inline-block; font-weight : 4px;">ЛЭТИ сейчас</h3><br>
                    <h4 class = "main info" id = "MainHeadinfo" style = "display: inline-block;"</h4> 
                    <p class = "text" id = "MainText">
                    Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» имеет давние контакты в области образования и научно-технического сотрудничества с университетами, научно-исследовательскими институтами и центрами, предприятиями и фирмами со всего мира. Более 50 предприятий высокотехнологичных областей промышленности являются стратегическими партнёрами ЛЭТИ. Среди зарубежных партнёров СПбГЭТУ 19 крупных промышленных предприятий, 8 научно-образовательных центров, 5 научно-исследовательских институтов, 85 университетов из 40 стран.
                    <br><br>На данный момент в ЛЭТИ обучается около 8000 студентов, аспирантов и слушателей. В университете работают 5 членов-корреспондентов РАН, 20 лауреатов национальных и международных наград, 200 профессоров и докторов наук. Ежегодно по основным образовательным программам вуз выпускает около 2000 специалистов. Подготовка бакалавров, магистров и специалистов осуществляется на 8 факультетах очной формы обучения. Подготовка бакалавров ведётся по 60 образовательным направлениям; подготовка магистров — по 53 образовательным программам; подготовка специалистов — по 4 направлениям. Подготовка кадров высшей научной квалификации осуществляется по 42 научным специальностям.</p>
                <a style = "color: whitesmoke" onmouseover="this.style.color = 'rgb(150,150,150)';this.style.cursor = 'pointer'" onmouseout ="this.style.color = 'whitesmoke'" 
                  onclick = "if(clickCheck){setBarScale(8.5);clickCheck = false}"> Войти внутрь </a> 
                    </div>`,sp);
            setTimeout(function(){ document.getElementById("MainInfoDiv").style.zIndex = "-3"},1000);
          break;
        }
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

let muteCheck = false;
function mute() {
  if (muteCheck){
    document.getElementById('volume_img').src = "img/volume-mute.svg"
    muteCheck = false
  } else{
    document.getElementById('volume_img').src = "img/volume.svg"
    muteCheck = true
  }
}

function arrowUp(){
 document.getElementById('mainFrame').style.top = "10px";
 document.getElementById('mainFrame').style.height = "99%";
 document.getElementById('headerArrow').style.top = "15px";
 document.getElementById('volume').style.top = "15px";
 document.getElementById('menu').style.height = "0px";

 document.getElementById('headerArrow').style.transition = "top 2s, opacity 0s";
 document.getElementById('headerArrow').style.opacity = "0";
 setTimeout(function(){document.getElementById('headerArrow').style.transition = "top 2s, opacity 1s"; document.getElementById('headerArrow').style.opacity = "1";},1000)

 document.getElementById('headerArrow').style.fontSize = "20px";
 document.getElementById('headerArrow').innerHTML = `<img src = "img/free-icon.svg" style="width: 20px; height: 20; " >`;

 document.getElementById("volume").style.transition = "top 2s, opacity 1s"
 setTimeout(function(){document.getElementById("volume").style.opacity = '1';},1000)
  if(BAR_SCALE >= 8)
    document.getElementById('headerArrow').style.color = "black";
  else
    document.getElementById('headerArrow').style.color = "whitesmoke";
}

function arrowDown() {
 document.getElementById('mainFrame').style.top = "100px";
 document.getElementById('mainFrame').style.height = "90%";
 document.getElementById('headerArrow').style.top = "70px";
 document.getElementById('volume').style.top = "70px";
 document.getElementById('menu').style.height = "80px";

 document.getElementById('headerArrow').style.transition = "top 2s, opacity 0s";
 document.getElementById('headerArrow').style.opacity = "0";
 setTimeout(function(){document.getElementById('headerArrow').style.transition = "top 2s, opacity 1s"; document.getElementById('headerArrow').style.opacity = "1";},1000)

 document.getElementById("volume").style.transition = "top 2s, opacity 0s"
 document.getElementById("volume").style.opacity = '0';
 document.getElementById('headerArrow').style.fontSize = "30px";
 document.getElementById('headerArrow').innerHTML = `^`;
   if(BAR_SCALE >= 8)
    document.getElementById('headerArrow').style.color = "black";
  else
    document.getElementById('headerArrow').style.color = "whitesmoke";
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
  setTimeout(function(){clickCheck = true},4000*tim);
  scrolling = true;
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
        elem.pause();scrolling = false;},450 * tim);
    },3550* tim);
  }
  else {
    clearInterval(intervalRewind);
    elem.playbackRate = 1.0 * sp;
    elem.play()

    setTimeout(function(){
      setTimeout(function(){elem.playbackRate = 0.8 * sp;},200 * tim);
      setTimeout(function(){elem.playbackRate = 0.6 * sp;},250 * tim);
      setTimeout(function(){elem.pause();scrolling = false;},450 * tim);
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