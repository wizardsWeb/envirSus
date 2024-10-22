import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';
import { Effects, Environment, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Globe from './Globe';

gsap.registerPlugin(ScrollTrigger);

const RotatingMesh = () => {
  // Use the useFrame hook to update the rotation on each frame
  useFrame((state) => {
    // Rotate the mesh around the Y-axis
    state.scene.children[0].rotation.y += 0.01; // Adjust the speed of rotation as needed
  });

  return (
    <mesh>
      <Globe />
    </mesh>
  );
};

const CanvasContainer = () => {
  return (
    <Canvas camera={{ position: [4.406491232372994, 1.9330232443075137, 1.3587700894510197] }} className=''>
      <OrbitControls enableZoom={false} enableDamping={false} enabled={false} />
      <RotatingMesh />
      <Environment preset='city' />
    </Canvas>
  );
};

export default CanvasContainer;
