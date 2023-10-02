

import React, { useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";




export default function Level02({ basculerActivation }, props) {








  const lv2 = useGLTF("./models/Level02.glb");
 


  const texture2 = useTexture("./textures/Level2Baked.jpg");



  texture2.flipY = false

  


  return (<>
    <mesh
      geometry={lv2.nodes.baked2.geometry}
      scale={0.25}
      position={[-11.7, 0, -2]}


    >
      <meshBasicMaterial map={texture2} />
    </mesh>



  </>
  );
}

useGLTF.preload("/Level02.glb");



