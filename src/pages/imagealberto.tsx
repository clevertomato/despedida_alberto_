import React from 'react'
import Image from "next/dist/client/image";
import alberto from '../img/alberto.jpg';
import albertovertical from '../img/albertovertical.jpg'

function Imagealberto() {
  return (
    <div className="relative autoheight resizeImage">
    <div className="relative w-full h-auto">

      <div className="not-appears w-full h-auto">
          <Image
          alt='Alberto'
          src={albertovertical}
          layout="intrinsic"
          objectFit='cover'
          className={'image'}
          ></Image>
      <div className="h-full w-full absolute top-0 left-0 grid grid-rows-6 grid-flow-col gap-4 text-white text-xl px-4 py-2">
      <div className="row-start-5 grid place-content-center text-center"><h3 className="ring-2 ring-white border-b-8 drop-shadow-xl text-shadow border-blue-500 rounded -mt-8 py-4 px-8">💍 Alberto se casa! Toca despedida 🥳</h3></div>
    </div>
      </div>
      <div className="relative appears w-auto h-screen">
        <Image
        alt='Not'
        src={alberto}
        layout="fill"
        objectFit='cover'
      />
                <div className="h-screen w-full absolute top-0 left-0 grid grid-rows-6 grid-flow-col gap-4 text-white text-2xl px-4 py-2">
      <div className="row-start-5 grid place-content-center text-center"><h3 className="ring-2 ring-white border-b-8 drop-shadow-xl text-shadow border-blue-500 rounded -mt-8 py-4 px-8">💍 Alberto se casa! Toca despedida 🥳</h3></div>
    </div>
      </div>

    </div>
  </div>
  )
}

export default Imagealberto