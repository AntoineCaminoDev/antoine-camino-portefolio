/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF,Float } from "@react-three/drei";

export default function Bag(props) {
  const { nodes, materials } = useGLTF("./models/bag.glb");
  return (
    <group {...props} dispose={null} scale={7}>
      <Float floatIntensity={0.5}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials.lv3vert}
        position={[0.003, 0.017, -0.022]}
        rotation={[1.661, 0, 0]}
      />
      </Float>
    </group>
  );
}

useGLTF.preload("/bag.glb");
