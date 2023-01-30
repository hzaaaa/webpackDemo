// import _ from 'lodash';
// import Print from './print';

//  function component() {
//    const element = document.createElement('div');

//    // lodash 是由当前 script 脚本 import 进来的
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.onclick = Print.bind(null, 'Hello webpack!');

//    return element;
//  }

//  document.body.appendChild(component());

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const loader = new GLTFLoader();


let fr = require('../threejs/assets/scene.gltf');
console.log('fr',fr)
loader.load(
  fr.default,
  function (gltf) {
    scene.add(gltf.scene);

    // scene.add(cube);

    camera.position.z = 5;
    function animate() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
    console.log('istrue');
    // if (WebGL.isWebGLAvailable()) {
    //   // Initiate function or other initializations here
      
    // } else {
    //   const warning = WebGL.getWebGLErrorMessage();
    //   document.getElementById('container').appendChild(warning);
    // }
  },
  undefined,
  function (error) {
    console.error(error);
  }
);


