
import React, { useRef } from "react";
import { useGLTF,Float  } from "@react-three/drei";

export default function Wordpress(props) {
  const { nodes, materials } = useGLTF("./models/wordpress.glb");
  return (
    <group {...props} dispose={null} scale={7}>
      <Float floatIntensity={0.5}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.wordpress.geometry}
        material={materials.blanc}
        position={[0, 0.026, 0]}
        rotation={[1.621, 0, 0]}
      />
      </Float>
    </group>
  );
}

useGLTF.preload("/wordpress.glb");
