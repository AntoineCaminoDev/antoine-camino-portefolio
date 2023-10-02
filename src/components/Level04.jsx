
import React, { useRef } from "react";
import { useGLTF,useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Level04(props) {


  const lv4 = useGLTF("./models/Level04.glb");
  const texture4 = useTexture("./textures/Level4Baked.jpg");

  texture4.flipY = false

  const wire = useRef()

  useFrame((state, delta) => {
    wire.current.rotation.y += delta / 2
  });




  return (

    <>

  <mesh position={[-30.25,1.5,-4.8]} scale={0.4} ref={wire}>
      <sphereBufferGeometry/>
      <meshBasicMaterial wireframe={true}/>
    </mesh>

    
    <mesh
    geometry={lv4.nodes.baked4.geometry}
    scale={0.25}
    position={[-31.3, 0, -2]}
 

  >
    <meshBasicMaterial map={texture4} />
  </mesh>
  
   
 

  </>
    
   

  );
}

useGLTF.preload("/Level04.glb");
