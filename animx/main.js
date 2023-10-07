import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Suspense } from "react";
import { Environment, OrbitControls  } from "@react-three/drei";
import {Canvas} from '@react-three/fiber';



export  function Model() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  return (
    <>
    {/* Use scale to control the size of the 3D model */}
    <primitive object={gltf.scene} scale={1.5} position={[2, -1.8, 0]} rotation={[0,-0.5,0]} />
    </>
);
};

export  function Odin() {
  return (
    <div className='float-left justify-center items-center h-screen' camera={{ position: [0, 0, 0], fov: 50 }} >

      <Canvas >
        <OrbitControls />
        <ambientLight intensity={0.9}  />
        <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
        <Model  />
        <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};


export function Hola()  {
  return (
    <div >
      <h1> Hola</h1>
    </div>
  )
} 



