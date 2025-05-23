

function setPanorama(panor){
  clickCheck = true;
  document.getElementById(mainFrame)
  document.getElementById('next').style.opacity = '1';
  let camera, scene, renderer, mesh, material, e, objects,
      imgData, uv, info, lon = 0, lat = 0, clx=0, dclx = 0;

  var mouseDown = {};
  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();
  let canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  let click = false;

  init(panor)
  function init(json) {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
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
      renderer.setSize(canvas.width, canvas.height);
      document.getElementById('mainFrame').append(renderer.domElement);
      info = document.createElement('div');
      info.id = 'info';
      document.body.append(info);
      addEventListener('mousedown', onPointerStart);

      elem.addEventListener('mousemove', onPointerMove);
      addEventListener('mouseup', onPointerUp);
      elem.addEventListener('wheel', onDocumentMouseWheel);
      addEventListener('touchstart', onPointerStart);
      elem.addEventListener('touchmove', onPointerMove);
      elem.addEventListener('touchend', onPointerUp);
      addEventListener('resize', onWindowResize);
      animate();
  }


  function createMaterial(img, stencil) {
      let textureLoader = new THREE.TextureLoader();
      let stencilImage = new Image();
      stencilImage.crossOrigin = "anonymous";
      stencilImage.src = stencil;
      stencilImage.onload = function() {
          canvas.width = stencilImage.width;
          canvas.height = stencilImage.height;
          ctx.drawImage(stencilImage,0,0);
          imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      };
      return new THREE.ShaderMaterial({
          uniforms: {
              mouse: { type: "2f", value: mouse },
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
              uniform vec2 mouse;
              uniform sampler2D texture1;
              uniform sampler2D texture2;
              void main() {
                  vec4 stencil = texture2D(texture2, vUv);
                  gl_FragColor = texture2D(texture1, vUv);
                  vec4 c = texture2D(texture2, mouse);
                  if (abs(c.x - stencil.x) < 0.0001 && stencil.x > 0.)
                      gl_FragColor += vec4(0.,0.2,0,0.);
              }`
      })
  }

  function onWindowResize() {
      // camera.aspect = innerWidth / innerHeight;
      // camera.updateProjectionMatrix();
      // canvas.width = innerWidth;
      // canvas.height = innerHeight-100;
      // renderer.setSize( canvas.width, canvas.height );
  }

  function onPointerStart( event ) {
      click = false;
      mouseDown.x = event.clientX || event.touches[ 0 ].clientX;
      mouseDown.y = event.clientY || event.touches[ 0 ].clientY;
      mouseDown.lon = lon;
      mouseDown.lat = lat;
      clx = event.clientX;
  }

  function raycast(event) {
      var rect = renderer.domElement.getBoundingClientRect();
      var x = (event.clientX - rect.left)/rect.width,
          y = (event.clientY - rect.top)/rect.height;
      mouse.set(x*2 - 1, 1 - y*2);
      raycaster.setFromCamera(mouse, camera);
      var intersects = raycaster.intersectObjects( scene.children );
      clx = event.clientX;
      if (intersects.length > 0 && intersects[0].uv) {
          material.uniforms.mouse.value = uv = intersects[0].uv;
          if (!imgData)return;
          let y = Math.floor((1-uv.y)*canvas.height);
          let x = Math.floor(uv.x*canvas.width);
          let off = Math.floor(y*canvas.width + x)*4;
          let r = imgData.data[off];
          let g = imgData.data[off+1];
          let b = imgData.data[off+2];
          //info.innerHTML = objects[`${r},${g},${b}`];
          if (typeof(objects[`${r},${g},${b}`]) != "undefined" || typeof(things[objects[`${r},${g},${b}`]]) != "undefined"){
            document.getElementById('mainFrame').style.cursor = "pointer";
          }
          else{
            document.getElementById('mainFrame').style.cursor = "default";
          }
          if (objects[`${r},${g},${b}`] && click){
            if(typeof(places[objects[`${r},${g},${b}`]]) != "undefined"){    
              info.innerHTML = "";
              elem.innerHTML = "";
              elem = changeTagName(document.getElementById('mainFrame'), 'div');//https://i.imgur.com/GFLxXVV.jpg    комната: https://imgur.com/jevL9av комнатаpen https://i.imgur.com/NUKbrbl.png"
              setPanorama( {
                texture: places[objects[`${r},${g},${b}`]]['texture'],
                stencil: places[objects[`${r},${g},${b}`]]['stencil'],
                objects: places[objects[`${r},${g},${b}`]]['objects']
              });
            } else{
              info.innerHTML = ""
              document.getElementById('objectInfo_div').style.pointerEvents = 'all';
              document.getElementById('objectInfo').style.height = '50%';
              document.getElementById('objectInfo').style.opacity = '1';
              document.getElementById('objectInfo_information').innerHTML = things[objects[`${r},${g},${b}`]];
            }
          }
          info.style.left = event.clientX + 15 + 'px';
          info.style.top = event.clientY + 'px';
          info.style.opacity = r+g+b ? 1 : 0;
      }
  }

  function onPointerMove( event ) {
      click = false;
      raycast(e = event);
      if (!mouseDown.x) return;
      let clientX = event.clientX || event.touches[0].clientX;
      let clientY = event.clientY || event.touches[0].clientY;
      lon = (mouseDown.x - clientX)*camera.fov/600 + mouseDown.lon;
      lat = (clientY - mouseDown.y)*camera.fov/600 + mouseDown.lat;
      lat = Math.max( - 85, Math.min( 85, lat ) );
      clx = event.clientX;
  }

  function onPointerUp() {
      dclx = mouseDown.x;
      mouseDown.x = null;
      click = true;
  }

  function onDocumentMouseWheel( event ) {
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
      if(dclx != clx){
        click = false;
      }
      e&&raycast(e);
      renderer.render(scene, camera);
  }
}