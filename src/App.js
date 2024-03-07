import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import React from 'react';
import './App.css';

function App() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  // Object
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const light = new THREE.AmbientLight( 0xffffff ); 
  scene.add( light );

  scene.add(camera)


  React.useEffect(() => {


    // Canvas
    const canvas = document.querySelector('canvas.webgl')
    

    // ...

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render(scene, camera)

    return () => {
      // myElement.removeEventListener('load');
    }


  }, [camera, scene])

  return (
    <canvas className="webgl"></canvas>
  );
}

export default App;
