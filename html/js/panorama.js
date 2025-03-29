  let camera, scene, renderer, mesh, material, e, objects,
      imgData, uv, info, lon = 0, lat = 0;

  var mousePDown = {};
  var mouseP = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();
  let canvasP;
  let ctxP;

  // init({
  //   texture: "https://i.imgur.com/GFLxXVV.jpg",
  //   stencil: "https://i.imgur.com/NUKbrbl.png",
  //   objects: {
  //     "255,0,0": "Розетка 1",
  //     "245,0,0": "Окно 1",
  //     "235,0,0": "Лоток",
  //     "225,0,0": "Коробка",
  //     "215,0,0": "Ящик стола",
  //     "205,0,0": "Розетка 2",
  //     "195,0,0": "Камин",
  //     "185,0,0": "Окно 2",
  //     "175,0,0": "А здесь был лось",
  //     "165,0,0": "Стол"
  //   }
  // })

  function init(json) {
      canvasP.width = innerWidth;
      canvasP.height = innerHeight-100;
      objects = json.objects;
      camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1100);
      camera.target = new THREE.Vector3(0, 0, 0);
      scene = new THREE.Scene();
      let geometry = new THREE.SphereBufferGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);
      material = createMaterial(json.texture, json.stencil);
      scene.add(mesh = new THREE.Mesh(geometry, material));
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(devicePixelRatio);
      renderer.setSize(canvasP.width, canvasP.height);
      document.getElementById('mainFrame').append(renderer.domElement);
      info = document.createElement('div');
      info.id = 'info';
      document.body.append(info);
      canvasP.addEventListener('mousePdown', onPointerStart);
      canvasP.addEventListener('mousePmove', onPointerMove);
      canvasP.addEventListener('mousePup', onPointerUp);
      //addEventListener('wheel', onDocumentMousePWheel);
      canvasP.addEventListener('touchstart', onPointerStart);
      canvasP.addEventListener('touchmove', onPointerMove);
      canvasP.addEventListener('touchend', onPointerUp);
      canvasP.addEventListener('resize', onWindowResize);
      animate();
  }

function setPanorama(texture,stencil,objects){
  canvasP = document.createElement('canvas');
  ctxP = canvasP.getContext('2d');
  init({
    texture: "https://i.imgur.com/GFLxXVV.jpg",
    stencil: "https://i.imgur.com/NUKbrbl.png",
    objects: {
      "255,0,0": "Розетка 1",
      "245,0,0": "Окно 1",
      "235,0,0": "Лоток",
      "225,0,0": "Коробка",
      "215,0,0": "Ящик стола",
      "205,0,0": "Розетка 2",
      "195,0,0": "Камин",
      "185,0,0": "Окно 2",
      "175,0,0": "А здесь был лось",
      "165,0,0": "Стол"
    }
  })
}

  function createMaterial(img, stencil) {
      let textureLoader = new THREE.TextureLoader();
      let stencilImage = new Image();
      stencilImage.crossOrigin = "anonymous";
      stencilImage.src = stencil;
      stencilImage.onload = function() {
        stencilImage.width = canvasP.width;
        stencilImage.height = canvasP.width;
          ctxP.drawImage(stencilImage,0,0);
          imgData = ctxP.getImageData(0, 0, canvasP.width, canvasP.height);
      };
      return new THREE.ShaderMaterial({
          uniforms: {
              mouseP: { type: "2f", value: mouseP },
              texture1: { type: "t", value: textureLoader.load( img ) },
              texture2: { type: "t", value: textureLoader.load( stencil ) }
          },
          vertexShader: `
              varying vec2 vUv;
              void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }`,
          fragmentShader: `
              precision highp float;
              varying vec2 vUv;
              uniform vec2 mouseP;
              uniform sampler2D texture1;
              uniform sampler2D texture2;
              void main() {
                  vec4 stencil = texture2D(texture2, vUv);
                  gl_FragColor = texture2D(texture1, vUv);
                  vec4 c = texture2D(texture2, mouseP);
                  if (abs(c.x - stencil.x) < 0.0001 && stencil.x > 0.)
                      gl_FragColor += vec4(0.,0.2,0,0.);
              }`
      })
  }

  function onWindowResize() {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      canvasP.width = innerWidth;
      canvasP.height = innerHeight-100;
      renderer.setSize( canvasP.width, canvasP.height );
  }

  function onPointerStart( event ) {
      mousePDown.x = event.clientX || event.touches[ 0 ].clientX;
      mousePDown.y = event.clientY || event.touches[ 0 ].clientY;
      mousePDown.lon = lon;
      mousePDown.lat = lat;
  }

  function raycast(event) {
      var rect = renderer.domElement.getBoundingClientRect();
      var x = (event.clientX - rect.left)/rect.width,
          y = (event.clientY - rect.top)/rect.height;
      mouseP.set(x*2 - 1, 1 - y*2);
      raycaster.setFromCamera(mouseP, camera);
      var intersects = raycaster.intersectObjects( scene.children );
      if (intersects.length > 0 && intersects[0].uv) {
          material.uniforms.mouseP.value = uv = intersects[0].uv;
          if (!imgData)return;
          let y = Math.floor((1-uv.y)*canvasP.height);
          let x = Math.floor(uv.x*canvasP.width);
          let off = Math.floor(y*canvasP.width + x)*4;
          let r = imgData.data[off];
          let g = imgData.data[off+1];
          let b = imgData.data[off+2];
          info.innerHTML = objects[`${r},${g},${b}`];
          info.style.left = event.clientX + 15 + 'px';
          info.style.top = event.clientY + 'px';
          info.style.opacity = r+g+b ? 1 : 0;
      }
  }

  function onPointerMove( event ) {
      raycast(e = event);
      if (!mousePDown.x) return;
      let clientX = event.clientX || event.touches[0].clientX;
      let clientY = event.clientY || event.touches[0].clientY;
      lon = (mousePDown.x - clientX)*camera.fov/600 + mousePDown.lon;
      lat = (clientY - mousePDown.y)*camera.fov/600 + mousePDown.lat;
      lat = Math.max( - 85, Math.min( 85, lat ) );
  }

  function onPointerUp() {
      mousePDown.x = null;
  }

  function onDocumentMousePWheel( event ) {
      let fov = camera.fov + event.deltaY * 0.05;
      camera.fov = THREE.Math.clamp(fov, 10, 75);
      camera.updateProjectionMatrix();
  }

  function animate() {
      requestAnimationFrame(animate);

      let phi = THREE.Math.degToRad( 90 - lat );
      let theta = THREE.Math.degToRad( lon );
      camera.target.x = 0.001*Math.sin(phi)*Math.cos(theta);
      camera.target.y = 0.001*Math.cos(phi);
      camera.target.z = 0.001*Math.sin(phi)*Math.sin(theta);
      camera.lookAt(camera.target);
      e&&raycast(e);
      renderer.render(scene, camera);
  }