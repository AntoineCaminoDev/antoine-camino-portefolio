

import React, { useRef, useState } from "react";
import { useTexture, useGLTF, Environment, MeshPortalMaterial, Stars, shaderMaterial, PresentationControls } from '@react-three/drei'






export default function Level01({ basculerActivation }, objectId, props) {

  const { nodes } = useGLTF("./models/Level01.glb");


 


  const texture1 = useTexture("./textures/Level0Baked.jpg");



  texture1.flipY = false

  const [hovered, setHovered] = useState(false);

  const group = useRef();



 



  const materialRef = useRef();


 

  return <>




    <mesh
      position-x={-1.9}
      geometry={nodes.baked1.geometry}
      scale={0.25}
      position={[1, 0, -2]}
   


    >
      <meshBasicMaterial map={texture1} />
    </mesh>

    
   

  </>




}





useGLTF.preload("/Level01.glb");



