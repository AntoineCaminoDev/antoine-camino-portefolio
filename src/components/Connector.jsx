
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Connector(props) {
  const { nodes, materials } = useGLTF("./models/connectorTEST.glb");
  return (
    <group {...props} dispose={null}>
    <group position={[-48.358, 3.559, -46.169]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube199.geometry}
        material={materials.blanc}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube199_1.geometry}
        material={materials.level01}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Icosphere002.geometry}
      material={materials.level00}
      position={[-45.367, 8.114, -47.559]}
      rotation={[-Math.PI, 0.08, -Math.PI]}
    />
    <group position={[-34.086, -0.181, 1.197]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials.blanc}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039_1.geometry}
        material={materials["white light"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane016.geometry}
      material={materials.metal}
      position={[-20.264, 10.456, -31.843]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane013.geometry}
      material={materials.metal}
      position={[-20.264, 9.119, -31.843]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane014.geometry}
      material={materials.metal}
      position={[-20.264, 7.744, -31.843]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane015.geometry}
      material={materials.metal}
      position={[-20.264, 6.672, -31.843]}
    />
    <group
      position={[-47.582, -0.153, -9.57]}
      rotation={[-Math.PI, 0, -Math.PI]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.blanc}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.orange}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Vert021.geometry}
      material={materials.metal}
      position={[-46.286, 1.534, -32.116]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Vert022.geometry}
      material={materials.metal}
      position={[-46.286, 1.534, -30.575]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Vert023.geometry}
      material={materials.metal}
      position={[-46.042, 1.534, -29.174]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane018.geometry}
      material={materials.metal}
      position={[-48.44, 10.456, -31.843]}
      rotation={[0, 0, 3.122]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane019.geometry}
      material={materials.metal}
      position={[-48.44, 9.121, -31.843]}
      rotation={[0, 0, 3.122]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Vert025.geometry}
      material={materials.metal}
      position={[-47.14, 7.299, -24.102]}
      rotation={[1.574, 0, 0]}
    />
    <group position={[-20.328, -0.153, -27.044]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials.blanc}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022_1.geometry}
        material={materials.orange}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane027.geometry}
      material={materials.metal}
      position={[-45.76, 2.165, -11.903]}
      rotation={[0, 0, 3.122]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Plane028.geometry}
      material={materials.metal}
      position={[-45.76, 3.858, -11.903]}
      rotation={[0, 0, 3.122]}
    />
    <group position={[-23.176, 1.193, -20.478]} rotation={[-1.568, 1.504, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011_1.geometry}
        material={materials["metal orange"]}
      />
    </group>
    <group position={[-45.455, 3.056, -26.618]} rotation={[0, 1.504, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014_1.geometry}
        material={materials["metal orange"]}
      />
    </group>
    <group position={[-23.176, 4.538, -20.478]} rotation={[-1.568, 1.504, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017_1.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017_2.geometry}
        material={materials["metal orange"]}
      />
    </group>
    <group position={[-45.455, 3.056, -24.084]} rotation={[0, 1.504, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030_1.geometry}
        material={materials["metal orange"]}
      />
    </group>
    <group position={[-45.455, 3.056, -21.52]} rotation={[0, 1.504, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031_1.geometry}
        material={materials["metal orange"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Circle052.geometry}
      material={materials["metal orange"]}
      position={[-47.108, 8.114, -47.633]}
      rotation={[0, 0, 1.568]}
    />
  </group>
  );
}

useGLTF.preload("/connectorTEST.glb");
