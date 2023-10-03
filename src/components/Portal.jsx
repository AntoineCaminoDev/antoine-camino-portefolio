import {
  CameraControls,
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  Text,
  useCursor,
  useTexture,
  useGLTF,
  PresentationControls
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { easing } from "maath";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";


import Wordpress from "./Wordpress.jsx"

import Divi from "./Divi.jsx"

import Bag from "./Bag.jsx"




export default function Reality ({ basculerActivation })  {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  useCursor(hovered);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  const lookvitrine= useRef()

 



  const lv1Maintext = document.getElementsByClassName("tp-vitrine-disable");
  const vitrineText = document.getElementsByClassName("tp-vitrine-enable");


  const gridHelper = new THREE.GridHelper(10, 10);
 


  useFrame((state) => {
    
    if (active === "DIVI") { 
      const targetPosition = new THREE.Vector3();
      
    scene.getObjectByName(active).getWorldPosition(targetPosition);
      gsap.to(state.camera.position, {
        z: targetPosition.z,
        duration: 0.5,
        
      });
      // state.camera.lookAt(position.x,position.y,position.z)
      // lv1Maintext.classList.add("lv1Maintext").style.display = "none";
      // vitrineText.classList.add("vitrineText").style.display = "block";
      
      
      
    }
  });

  useFrame((state) => {
    if (active === "WordPress") { 
      const targetPosition = new THREE.Vector3();
      
    scene.getObjectByName(active).getWorldPosition(targetPosition);
      gsap.to(state.camera.position, {
        z: targetPosition.z,
        x: targetPosition.x+4,
        duration: 0.5,
        
      });

    
    }
  });


  useFrame((state) => {
    if (active === "WooCommerce") { 
      const targetPosition = new THREE.Vector3();
      
    scene.getObjectByName(active).getWorldPosition(targetPosition);
      gsap.to(state.camera.position, {
        z: targetPosition.z,
        x: targetPosition.x-2,
        duration: 0.5,
        
      });

      gsap.to(state.camera.rotation, {
        
        y: 0.5,
        duration: 0.5,
        
      });


    }
  });


  


  // useFrame((state) => {
  //   if (active === "SEO") { // Check if the active object is the "site Vitrine"
  //     gsap.to(state.camera.position, {
  //       z: -7,
  //       duration: 0.5,
        
  //     });


  //     gsap.to(state.camera.rotation, {
  //       y: -3,
  //       duration: 0.5,
  //       ease: 'Power1.easeInOut'
  //     });
  //   }
  // });

  

  // useEffect(() => {
  //   if (active) {
  //     const targetPosition = new THREE.Vector3();
  //     scene.getObjectByName(active).getWorldPosition(targetPosition);
  //     controlsRef.current.setLookAt(
  //       0,
  //       0,
  //       5,
  //       targetPosition.x,
  //       targetPosition.y,
  //       targetPosition.z,
  //       true
  //     );
  //   } else {
  //     controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
  //   }
  // }, [active]);

  // if(active){
  //   const targetPosition = new THREE.Vector3();
  //   scene.getObjectByName(active).getWorldPosition(targetPosition);

  //   useFrame((state) => {
  //     gsap.to(state.camera.position, {
  //       x: -13,
  //       z: -5,


  //       duration: 1.5,
       
  //     })

  //   })

  // }


  const sphereRef=useRef()



  return (
    <>
      
      



      <Portal
       
        

        position={[-9.76,1.37,-4.75]}
         rotation-y={-0.01}
        
        name="DIVI"
        color="#EB3461"
        texture={
          "textures/anime_art_style_earth_from_space.jpg"
        }
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        
      >

     <Divi />

      </Portal>

      <Portal
      
        texture={"textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"}
        name="WooCommerce"
        color={"#05B035"}

      
        position={[-12.83,1.36,-2.77]}
        rotation-y={1.26}
        
        
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
       
        <Bag/>
       
      </Portal>

      <Portal

      //{"position":{"x":-6.049999999999999,"y":1.38,"z":-1.82}}
      //{"rotation":{"x":0.08,"y":-0.9300000000000006,"z":0}}
         position={[-6.04,1.38,-1.82]}
         rotation-y={-0.93}
        name="WordPress"
        color="#2358E7"
        texture={"textures/AdobeStock_226375061.jpeg"}
        
        
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        
        <Wordpress scale={0.25} position={[0,0,-1]} />
        
      
        
      </Portal>
    </>
  );
};

const Portal = ({
  children,
  texture,
  name,
  color,
  active,
  setActive,
  hovered,
  setHovered,
  ...props
}) => {
  const map = useTexture(texture);
  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

 
  return (
    <group {...props}>
      <Text
        font="fonts/EVA35Regular.otf"
        fontSize={0.16}
        position={[0, -0.5, 0.051]}
        anchorY={"bottom"}
      >
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox
        name={name}
        args={[1.2, 2, 0.1]}
        radius={0.2}
        onDoubleClick={() => setActive(active === name ? null : name) }
       
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}
      >
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};


const useBodyScrollLock=()=>{

const bodyStyle= document.body.style

const [isLocked, setisLocked] =useState(
  bodyStyle.overflowY==='hidden'
)

useEffect(()=>{
  bodyStyle.overflowY= isLocked ?'hidden':'auto'
},[isLocked, bodyStyle])

const toggle=()=>setisLocked(!isLocked)

return[isLocked,toggle]

}
