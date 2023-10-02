import React, { useState, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF,useTexture} from "@react-three/drei";
import { gsap } from "gsap";






export default function Level03({ basculerActivation }, objectId, props) {

  const { nodes, materials } = useGLTF("./models/Level03.glb");
 
  const lv3 = useGLTF("./models/Level03.glb");
  const texture3 = useTexture("./textures/Level3Baked.jpg");

  texture3.flipY = false




  

  


  



  const bulletRef = useRef()




  const { size } = useThree();

  const sizes = {
    with: window.innerWidth,
    height: window.innerHeight
  }



  const [active, setActive] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModelHidden, setIsModelHidden] = useState(false);

  const [spheres, setSpheres] = useState([]);

  const block = () => {
    basculerActivation()

  }

  // quitte le  jeu avec echap
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        // Appuyer sur "Échap" arrête le jeu
        setIsGameStarted(false);
        setIsModelHidden(false);

        //ui
        document.querySelectorAll("section").forEach(function (section) {
          section.style.backgroundColor = "white";
        });

        document.getElementsByClassName("lv3UI")[0].style.display = "block";
        document.getElementsByClassName("gameUI")[0].style.display = "none";

      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  //activé le jeu
  const activateGame = () => {
    console.log('jeu lancé');

    // block(); // Désactiver le jeu s'il est actif
    setIsGameStarted(true);
    setIsModelHidden(true);

    //ui
    document.querySelectorAll("section").forEach(function (section) {
      section.style.backgroundColor = "transparent";
    });

    document.getElementsByClassName("lv3UI")[0].style.display = "none";
    document.getElementsByClassName("gameUI")[0].style.display = "block";



    setIsGameStarted(true);
    setIsModelHidden(true);
  };

  //setup la position de la camera du jeu 
  useFrame((state) => {
    if (isGameStarted) {
      gsap.to(state.camera.position, {
        z: -10,
        y: -1,
        duration: 1.5,
      });

      gsap.to(state.camera.rotation, {
        x: 0.15,
        y: 0.24,
        z: -0.05,
        duration: 1.5,
      });
    }
  });

 
  // const cursor = {}
  // cursor.x = 0
  // cursor.y = 0

  // window.addEventListener('mousemove', (event) => {
  //   cursor.x = event.clientX/ sizes.with - 0.5
  //   cursor.y = event.clientY/ sizes.height - 0.

    
  // })

  // const raycaster = new THREE.Raycaster();


  // function onmousedown(event){
  //   mouseCoords.set(
  //     (event.clientX/window.innerWidth)*2-1,
  //     - (event.clientX/window.innerHeight)*2+1
  //   )



  // }

  // raycaster.setFromCamera( mouseCoords, state.camera );  


  // const test = (mouse) => {
  //   // Créez une nouvelle sphère à la position actuelle de la souris
  //   console.log('tir');

   
  //   const newSphere = { position: [mouseX, mouseY, -50] };

  //   // Ajoutez la nouvelle sphère à la liste des sphères
  //   setSpheres([...spheres, newSphere]);
  //   console.log(newSphere);
  //   bulletRef.current.applyImpulse({x:0,y:0,z:-20})
  // };



 


   //controler la camera avec la souris 
   useFrame(({ mouse, camera }, delta) => {
    if (isGameStarted) {
      // Accéder à la caméra en utilisant la référence
      // const camera = cameraRef.current;

      // Calculer la rotation de la caméra en fonction de la position de la souris
      const rotationFactor = 0.5; // Facteur de vitesse de rotation 0.5
      camera.rotation.x = mouse.y * rotationFactor
      camera.rotation.y = -mouse.x * rotationFactor
    }
  });

  const [hover,setHover]=useState(false)

  const cube =useRef()
  const jump =()=>{

    cube.current.applyImpulse({x:0,y:0.05,z:0})
  }

 
 


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        // Code pour gérer la touche Échap
      } else if (event.key === " ") {
        // Empêcher le défilement lorsque la touche Espace est enfoncée
        event.preventDefault();

        // Appeler test() lorsque la touche Espace est enfoncée
        handleShoot()
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // position={[-28.8, 0, -2.8]}

 
  const shaderMaterialRef = useRef();

  return (
   <>
    
    <mesh
    geometry={lv3.nodes.baked3.geometry}
    scale={0.25}
    position={[-21.53, 0, -2]}
  // position={lv2.nodes.baked.position}

  // rotation-y={1.6}


  >
    <meshBasicMaterial map={texture3} />
  </mesh>
  
   
 

  </>
    
    
  );
}

useGLTF.preload("/Level03.glb");


// onClick={() =>{{ console.log('ici'),buttonClick("ecranLV3", activated ? [2, 0]  : [4, 0])}  }}

// {Cliked === true && clickedButton === "projet1" ? (

//   <mesh position={[38, 0, 2]} scale={0.25}>
//     <boxGeometry />
//     <meshStandardMaterial color="mediumpurple" />
//   </mesh>
// ) : null}





{/* <mesh
castShadow
receiveShadow
geometry={nodes.ecran_de_selection_lv3.geometry}
material={materials.metal}
position={[-143.393, 4.46, 1.605]}
onClick={() =>{ buttonClick("ecranLV3", activated ? [2, 0]  : [4, 0]) }}
> 
<Html   wrapperClass="htmlScreen"  prepend  zIndexRange={zIndexRange}  width={2000} height={1000} transform occlude={NoBlending} distanceFactor={5} position={[-0.2,0,0]}  ref={planeRef } >
    <div>
    <Pages  activerMachine={ activerMachine}/> 
    </div>
</Html>


</mesh>
 */}
