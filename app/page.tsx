'use client';

{/*import  Model from  '../animx/main.js';*/}
import {Canvas} from '@react-three/fiber';
import { Suspense } from "react";
import { Environment, OrbitControls  } from "@react-three/drei";
import Head from 'next/head'
import {Hola} from '../animx/main.js';
import {Odin} from '../animx/main.js';


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div>
        <main className="flex-col">
          <div className="justify-center h12 text-6xl align-middle text-center mt-4" > 
            <h1>3dW0rld</h1> 
          </div>

          <div className=" text-center align-middle h-screen ">   

              <Odin />
          </div>

        </main>
      </div>
    </div>
  )
}

