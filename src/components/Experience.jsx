import {  PresentationControls} from '@react-three/drei'
import * as THREE from 'three'
import { useFrame} from '@react-three/fiber'
import { useRef, useState } from 'react'
import { gsap } from "gsap";




import Level01 from "./Level01.jsx"
import Level02 from "./Level02.jsx"
import Level03 from "./Level03.jsx"
import Level04 from "./Level04.jsx"
import TP from "./Portal.jsx"
import Robot from "./Robot.jsx"
import Image from "./image.jsx"


export const Experience = (props) => {

  const { section } = props;



  const groupRef = useRef()
  const cameraRef = useRef()

  const lv1Ref = useRef()
  const lv2Ref = useRef()

  // Étape 1: Définir l'état pour garder une trace de l'état actuel (activé ou désactivé)
  const [Activated, setActivated] = useState(false)
  const [clickedMesh, setClickedMesh] = useState(null)
  const [zIndexRange, setZIndexRange] = useState([2, 0]);
  
  // Étape 2: Définir une fonction pour basculer l'état lorsque vous cliquez sur l'image

  const basculerActivation = (objectId, zIndexRange) => {
    setClickedMesh(objectId)
    setActivated(!Activated)
    setZIndexRange(zIndexRange)
    


  };

  function disableScroll() {
    // Stockez la position actuelle de la fenêtre
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
  
    // Empêchez le scroll en fixant la position de défilement
    document.body.style.overflow = 'hidden';
    window.scrollTo(scrollX, scrollY);
  }
  
  function enableScroll() {
    // Réactivez le scroll en rétablissant le défilement normal
    document.body.style.overflow = 'auto';
  }
  
  // ...
  
  if (Activated === true) {
    disableScroll();
  } else {
    enableScroll();
  }

 




  // Logique d'animation du déplacement du groupe  s1=18 de base  10pour voir le connecteur 1  s2=38

  useFrame(() => {

    if (groupRef.current) {
      let targetX = 0;
      let targetY = 0;


      if (section === 0) {
        targetX = 1;
        targetY = 0;
      } else if (section === 1) {
        targetX = 10.5;
        targetY = 0;
      } else if (section === 2) {
        targetX = 20.5;
        targetY = 0;
      } else if (section === 3) {
        targetX = 30;
        targetY = 0;
      }



      const animationDuration = 4; // Durée de l'animation en secondes

      gsap.to(groupRef.current.position, {
        x: targetX,
        y: targetY,
        duration: animationDuration
      });
    }
  });

  



  if (Activated === true && clickedMesh === "mesh1") {

    useFrame((state) => {


      gsap.to(state.camera.position, {
        x: 2,
        z: -24,


        duration: 1.5,




      })

      gsap.to(state.camera.rotation, {
        x: 1.1,
        y: -7,
        z: 0,


        duration: 1.5,


      })


      console.log(state.camera.position, state.camera.rotation)

    });

  } else {
    useFrame((state) => {

      gsap.to(state.camera.position, {
        x: 1,
        y: 2,
        z: 6,


        duration: 2,
        
      })

      gsap.to(state.camera.rotation, {
        x: -0.3217505543966423,

        y: 0.1568156853444008,
        z: 0.05201097082184465,

        duration: 2,
        
      })
    })
  }


  // TP SUR LA MAP
  if (Activated === true && clickedMesh === "map") {

    useFrame((state) => {


      gsap.to(state.camera.position, {
        x: -5,
        y:0,
        z: -19,


        duration: 1.5,
        


      })

      gsap.to(state.camera.rotation, {
        y: 0,
        x: -0.2,
        z:0.01,



        duration: 1.5,
        
      })





    });

  } else {
    useFrame((state) => {

      gsap.to(state.camera.position, {
        x: 1,
        y: 2,
        z: 6,


        duration: 2
      })

      gsap.to(state.camera.rotation, {
        x: -0.3217505543966423,

        y: 0.1568156853444008,
        z: 0.05201097082184465,



        duration: 2
      })

    })

  }


  if (Activated === true && clickedMesh === "board") {

    useFrame((state) => {


      gsap.to(state.camera.position, {
        x: 7,
        y:5,
        z: -15,


        duration: 1.5,
       


      })

      gsap.to(state.camera.rotation, {
        y: 0,
        x: -0.2,



        duration: 1.5,
        
      })





    });

  } else {
    useFrame((state) => {

      gsap.to(state.camera.position, {
        x: 1,
        y: 2,
        z: 6,


        duration: 2
      })

      gsap.to(state.camera.rotation, {
        x: -0.3217505543966423,

        y: 0.1568156853444008,
        z: 0.05201097082184465,



        duration: 2
      })

    })

  }

  if (Activated === true && clickedMesh === "lv4") {

    useFrame((state) => {


      gsap.to(state.camera.position, {
        x: 2.5,
        y:3.5,
        z: -8,


        duration: 1.5,
       


      })

      gsap.to(state.camera.rotation, {
        y: 0,
        x: -0.2,



        duration: 1.5,
        
      })





    });

  } else {
    useFrame((state) => {

      gsap.to(state.camera.position, {
        x: 1,
        y: 2,
        z: 6,


        duration: 2
      })

      gsap.to(state.camera.rotation, {
        x: -0.3217505543966423,

        y: 0.1568156853444008,
        z: 0.05201097082184465,



        duration: 2
      })

    })

  }



  return <>




    <PresentationControls
      global
      polar={[0, 0]}

      azimuth={(Activated === true) ? [0, 0] : [-0.8, 0.8]}
    >



      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <ambientLight intensity={0.5} />
      {/* <Environment preset="sunset" /> */}


      <group ref={groupRef} position-z={3}>
        {/* <Earth scale={0.10} />
        <Moon scale={0.25} /> */}
        <TP scale={0.25} basculerActivation={basculerActivation} />



        <Level01 scale={0.25} basculerActivation={basculerActivation} >
          
        </Level01>


        <Level02 scale={0.25} basculerActivation={basculerActivation} />
        <Level03 scale={0.25} basculerActivation={basculerActivation} />
        <Level04 scale={0.25} />


        <Robot>

        </Robot>

        <Image basculerActivation={basculerActivation}/>

       

      </group>


    </PresentationControls>












  </>
}