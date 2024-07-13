// Shirt.jsx

import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Shirt({ color, ...props }) {
  const { nodes, materials } = useGLTF('/shirt.glb');

  // Ensure color is defined and materials.lambert1 exists before setting color
  if (color && materials.lambert1) {
    materials.lambert1.color.set(color);
  }

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} />
    </group>
  );
}

useGLTF.preload('/shirt.glb');

export default Shirt;
