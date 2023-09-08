'use client';

import  Model from  '../animx/main.js';
import {Canvas} from '@react-three/fiber';
import { Suspense } from "react";
import { Environment, OrbitControls  } from "@react-three/drei";
import Head from 'next/head'
import {Hola} from '../animx/main.js';


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div>
        <main className="flex-col">
          <div className="h12 text-6xl align-middle text-center mt-4" > 
            <h1>3dW0rld</h1> 
          </div>

          <div className="text-center align-middle h-screen">
            <Canvas className="h-full " 
              shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model /> 
                <Environment preset="city" />
              </Suspense>
              <OrbitControls />
            </Canvas>
            <div>
              <Hola />
            </div> 
          </div>

        </main>
      </div>
    </div>
  )
}

