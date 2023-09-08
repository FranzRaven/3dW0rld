import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"



export default function Model() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  return (
    <>
    {/* Use scale to control the size of the 3D model */}
    <primitive object={gltf.scene} scale={1} />
    </>
);

};

export function Hola()  {
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
} 



