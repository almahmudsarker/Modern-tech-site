import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';

function ObjModelViewer() {
    let headModel; // Define headModel outside the callback function.

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create an OBJLoader
    const loader = new OBJLoader();

    // Load the .obj model
    loader.load('/12140_Skull_v3_L2.obj', (obj) => {
      const headModel = obj;
      scene.add(headModel);

      // Optionally, set the position, rotation, and scale of the model
      headModel.position.set(0, 0, 0);
      headModel.rotation.set(0, 0, 0);
      headModel.scale.set(1, 1, 1);

      animate();
    });

    // Animate function
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    // Set the initial camera position
    camera.position.z = 5;

    // Clean up the scene and renderer on unmount
    return () => {
      scene.remove(headModel);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      {/* The Three.js canvas will be appended here. */}
      <canvas id="my-threejs-canvas"></canvas>
    </div>
  );
}

export default ObjModelViewer;
