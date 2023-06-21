import Image from "next/image";
import { useState } from "react";
import React from 'react'
import wolf from '../img/wolf.gif'
import PaypalIcon from "./logopaypal";


export default function modal({open, opened}) {
    const [openForm, setOpenForm] = useState(true);
  
    const openContact = () =>{
        open();
        console.log(openForm);
        if(openForm){
            setOpenForm(!openForm);
        }
    }
    const openPaypal = () =>{
        window.open('https://paypal.me/despedidaAlberto', '_blank', 'noreferrer');
    }

    
  return (
    <div className={`modalfixed left-0 bottom-0 bg-blue-50/90 grid h-screen w-screen place-content-center absolute duration-500 modal ${!opened ? 'hidden' : ''} ` }>
<div aria-hidden="true" className="z-50 w-full p-4 overflow-x-hidden overflow-y-auto max-h-full">
    <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative border-blue-500 border bg-white rounded-lg shadow shadow-blue-500 dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 py-8 border-b border-blue-500 rounded-t dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                💸 ¡¡¡A donar cabrones!!! 💸
                </h3>
                <button type="button" className="text-black bg-transparent hover:bg-blue-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={openContact} >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-6 py-8 space-y-6 flex flex-col gap-2">
                <h2 className="text-center font-normal">Nah, era broma, a alberto le sobra la pasta y no necesita que la gente done. Igualmente aceptamos <code className='font-semibold text-base'>ideas</code>  y <code className='font-semibold text-base'>paypal</code>.</h2>
            <Image
            src={wolf}
            alt="Logo"
            className="object-cover cursor-pointer"
            layout="intrinsic"
            priority
          />
            </div>
            <div className="grid place-content-center p-6 space-x-2 border-t border-blue-500 rounded-b dark:border-gray-600" onClick={openPaypal}>
                <button data-modal-hide="defaultModal" type="button" className=" text-black bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded border border-blue-500 border-5 text-base font-semibold px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"> Págame <PaypalIcon/> </button>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
