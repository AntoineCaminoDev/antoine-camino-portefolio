import React, { useRef } from "react";
import { useGLTF,Float } from "@react-three/drei";

export default function Stars(props) {
  const { nodes, materials } = useGLTF("./models/Stars.glb");
  return (
    <group {...props} dispose={null}>
        <Float>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.jaune}
        position={[3.071, 2.992, -1.692]}
        rotation={[1.302, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.jaune}
        position={[-4.21, 0.975, -7.621]}
        rotation={[1.32, 0.098, -0.366]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials.jaune}
        position={[-1.192, -0.684, -1.692]}
        rotation={[1.333, 0.127, -0.481]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials.jaune}
        position={[-4.042, 5.382, -5.889]}
        rotation={[1.33, 0.12, -0.453]}
      />
      </Float>
    </group>
  );
}

useGLTF.preload("/Stars.glb");
