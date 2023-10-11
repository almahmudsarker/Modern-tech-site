import React, { useEffect } from 'react';
import * as THREE from 'three';

function HeadScene() {
  useEffect(() => {
    // Scene
   // Create a new Three.js scene.
var scene = new THREE.Scene();

// Create a new Three.js geometry object for a triangle.
var geometry = new THREE.BufferGeometry();

// Define the vertices of the triangle.
var vertices = new Float32Array([
  0, 0, 0,
  1, 0, 0,
  0.5, 1, 0,
]);

// Create a new buffer attribute and set the vertices.
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Create a new Three.js material object and set its color to blue.
var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });

// Create a new Three.js mesh using the geometry and material.
var mesh = new THREE.Mesh(geometry, material);

// Add the mesh to the scene.
scene.add(mesh);

// Create a new Three.js camera object.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Position the camera to view the triangle.
camera.position.set(0, 0, 2);

// Create a new Three.js renderer.
var renderer = new THREE.WebGLRenderer();

// Set the renderer's size to match the window dimensions.
renderer.setSize(window.innerWidth, window.innerHeight);

// Append the renderer's DOM element to the document.
document.body.appendChild(renderer.domElement);

// Create an animation loop to continuously render the scene.
var animate = function () {
  requestAnimationFrame(animate);

  // Rotate the triangle mesh (optional).
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  // Render the scene with the camera.
  renderer.render(scene, camera);
};

// Start the animation loop.
animate();

    // Clean up
    return () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div id="three-container">
      <canvas id="my-threejs-canvas"></canvas>
    </div>
  );
}

export default HeadScene;
