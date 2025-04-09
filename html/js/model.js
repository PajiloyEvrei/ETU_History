
function renderModel(can){

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, can.width/can.height, 0.1, 1000);
  camera.position.z = 10;

  renderer = THREE.WebGLRenderer({alpha: true, antialias: true});
  console.log(renderer);
  renderer.setClearColor(0x000000,0);
  renderer.setSize(1280, 720);

  renderer.domElement.setAttribute("id","MainFrameModel");
  document.getElementById('mainFrame').append(renderer.domElement);

  const aLight = new THREE.AmbientLight(0x404040,1.2);
  scene.add(aLight);

  const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
  pLight.position.set(0,-3,7);
  scene.add(pLight);

  let loader = new THREE.GLTFLoader();
  let obk = null;

  loader.load("3d/minimap-1-2-C.gltf", function(gltf) {
    obj = gltf;
    obj.scene.scale.set(1.3, 1.3, 1,3);

    scene.add(obj.scene);
  });

  function animate() {
    requestAnimationFrame(animate);

    if(obj){
      obj.scene.rotation.y += 0.03;
    }

    renderer.render(scene, camera);
  }
  animate();

}