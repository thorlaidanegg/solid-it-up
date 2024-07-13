// ShirtModel.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Shirt } from './Shirt'; // Assuming Shirt is a named export now
import { Float, OrbitControls } from '@react-three/drei';

const ShirtModel = ({ color }) => {

  if(color==="rose")
  {
    color="pink";
  }



  return (
    <>
    <Canvas>
      <OrbitControls/>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Float intensity={0.2}>
      <Shirt color={color} scale={[10, 10, 10]} />
      </Float> {/* Increase size of the shirt model */}
    </Canvas>
    </>
  );
};

export default ShirtModel;
