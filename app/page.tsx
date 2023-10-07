'use client';
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
          <div className="justify-center  h12 text-6xl align-middle text-center mt-4" > 
            <h1>3dW0rld</h1> 
          </div>

          <div className=" text-center align-middle h-screen ">   
              <Odin />
          </div>
          <div className='absolute left-5 bottom-1/3   box-content h-32 w-96 p-4 border-4 border-gray-950 hover:border-gray-600'>
            <Hola />
          </div>
        </main>
      </div>
    </div>
  )
}

