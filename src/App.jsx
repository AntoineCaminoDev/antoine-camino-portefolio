import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls, Stars } from '@react-three/drei'
import {  useState,Suspense,useRef } from "react";



import { Interface } from './components/interface.jsx'
import { ScrollManager } from './components/ScrollManager.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'


function App() {
  const [section, setSection] = useState(0);
  

  const canvasRef = useRef(null);
  return <>
   
    <Canvas
            flat
            camera={{
                fov: 50,
                near: 0.1,
                far: 200,
                position: [1, 2, 6]
                //x y z
                
            }}
            ref={canvasRef}
            className='Moncanvas'
        >
            
            <Stars radius={20} depth={60} count={5000} factor={4} saturation={0} fade speed={3} />
            
            <ScrollControls pages={4} damping={0.1} >
                <ScrollManager className="managerScrool" section={section} onSectionChange={setSection}/>
                
                <Suspense>

                    <Experience section={section} className="XP" />
                </Suspense>
                
                
                <Scroll html  >


                     <Interface className="interface"/> 
                </Scroll>
            </ScrollControls >
            
        </Canvas>
        
        {/* <Loader/> */}
        <LoadingScreen/>

        
    
        </>
}

export default App;
