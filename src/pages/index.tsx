import { FormEvent, useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { api } from "../services/api";
import Modal from "./modal";
import Image from "next/dist/client/image";
import fiesta from '../img/fiesta.jpg';
import Imagealberto from "./imagealberto";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpened, setModalOpened] = useState(true);
  const [opened, setOpened] = useState(false);

  const openContact = () =>{
    setOpened(!opened);
  }

  const openToast = () =>{
    toast.custom((t) => (
      <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4 h-64">
      <div className="flex items-start h-full  gap-5">
        <div className="flex-shrink-0 pt-0.5 h-12 rounded">
            <Image
              alt='Fiesta'
              src={fiesta}
              layout="intrinsic"
              objectFit='cover'
              width={200}
              height={225}
              className={'image'}
              priority
            ></Image>
        </div>
        <div className="h-full ml-3 grid place-content-center text-xl ">
          Alberto y el consejo te lo agradece 🍻
        </div>
      </div>
    </div>
    <div className="flex ">

      <button
        onClick={() => toast.dismiss(t.id)}
        className=" w-full border border-transparent  p-4 grid place-content-start text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <p className="rounded hover:bg-blue-200 text-lg h-auto px-4 py-2">X</p>
      </button>
    </div>
  </div>
      ))
  }

  function sendEmail(event: FormEvent) {
    event.preventDefault();
    const formData = {
      name,
      email,
      message
    }

    api.post('/mail', formData)
    .then((response) => {
      console.log(response);
      setName('');
      setEmail('');
      setMessage('');
      openToast();
      /*toast.success('Mensaje enviado!!');*/
    })
    .catch((error) => {
      console.log(error);
      toast.error("Ups, un error.")
    });  
  };


  return (
    <div className="flex flexposition h-screen max-h-full w-auto scrollyhidden">
      <Imagealberto/>
      <div className="resizeForm flex flex-col justify-center items-center bg-white pt-2 max-h-screen">
        <div className="h-25 flex flex-col items-center py-1 mb-4">
          <div className="self-center w-10/12 rounded border border-blue-500 text-blue-500 p-3 mb-8 font-bold duration-1000 text-center">
          Bienvenido al buzón de sugerencias 📬
            </div>
          <h4 className="mb-4 px-2 text-center textInfoSize">• Aquí puede sugerir ideas para la despedida de Alberto</h4>
          <h4 className="mb-4 px-2 text-center textInfoSize">• Todas las ideas serán analizadas por el consejo de sabios</h4>
          <h4 className="mb-4 px-2 text-center textInfoSize">• Si la idea es tomada en serio recibirás la bendición de nuestra respuesta</h4>
        </div>
        <form 
          className="h-auto pt-8 w-10/12 bg-white flex flex-col rounded-md	p-4 py-8 shadow-xl gap-2 border border-blue-500"
          onSubmit={sendEmail}
        >
          <h3 className="text-sm text-blue-400 ">Nombre:</h3>
          <input 
            className="rounded border border-blue-200 p-1" 
            type="text"
            value={name} 
            onChange={event => setName(event.target.value)} 
          />
          <h3 className="text-sm text-blue-400 ">Correo:</h3>
          <input 
            className="rounded border border-blue-200 p-1 mb-1" 
            type="email" 
            value={email} 
            onChange={event => setEmail(event.target.value) } 
          />
          <h3 className="text-sm text-blue-400 ">Mensaje: *</h3>
          <textarea 
            className="rounded border border-blue-200 p-1 mb-1" 
            value={message} 
            onChange={event => setMessage(event.target.value)} 
            required
            rows={3}
            cols={3}
          />

          <button 
            className="rounded bg-blue-500 text-white p-3 mt-8 font-bold hover:bg-blue-700 duration-500"
            type="submit"
          >
            Enviar mensaje
          </button>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          
        </form>
        <div className="relative bottom-0 h-auto">
          <button 
              className=" float-right rounded m-4 py-2 px-4 border border-blue-500 shadow-md hover:shadow-none hover:bg-gray-100/60"
              type="submit"
              onClick={openContact}
          >💸 Donativos 💸</button>
        </div>
        {modalOpened && <Modal open={openContact} opened={opened}/>
        }
      </div>

    </div>
  )
}
