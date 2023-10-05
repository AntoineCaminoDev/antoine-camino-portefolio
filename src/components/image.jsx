
import React, { useRef, useState } from "react";
import { useGLTF, Html, useTexture } from "@react-three/drei";

import { useControls } from "leva";
export default function Image({ basculerActivation }, props) {


  const Atlas1 = useGLTF("./models/Atlas1.glb");
  const Atlas2 = useGLTF("./models/Atlas2.glb");

  const board = useGLTF("./models/board.glb");
  const lv2img = useGLTF("./models/lv2img.glb");
  const console= useGLTF("./models/console.glb");
  const console2= useGLTF("./models/console2.glb");
  const reality= useGLTF("./models/reality.glb");
  const map= useGLTF("./models/map.glb");
  const atlas4= useGLTF("./models/atlaslv4.glb");
  const earth= useGLTF("./models/earthPic.glb");


 



  const buttonClick = (objectId) => {

    basculerActivation(objectId)
    
  }



  return (
    <>
    <primitive object={Atlas1.scene}  onClick={() => buttonClick("mesh1")} scale={0.25} position={[0.08,-0.03,0.9]}></primitive>
    <primitive object={map.scene} onClick={() => buttonClick("map")}   scale={0.25} position={[0.09,-0.02,0.88]}></primitive>


    //lv2
    <primitive object={board.scene} onClick={() => buttonClick("board")}   scale={0.25} position={[0.11,-0.01,0.95]}></primitive>
    <primitive object={console.scene}   scale={0.25} position={[0.15,-0.03,0.90]}></primitive>
    <primitive object={console2.scene}   scale={0.25} position={[0.15,-0.03,0.90]}></primitive>
    <primitive object={reality.scene}   scale={0.25} position={[0.15,-0.03,0.90]}></primitive>

    //lv4
    <primitive object={atlas4.scene} onClick={() => buttonClick("lv4")} scale={0.25} position={[0.15,-0.03,0.90]}></primitive>
    <primitive object={earth.scene}  scale={0.25} position={[0.15,-0.03,0.90]}></primitive>

    
  
    
    </>

  );
}

