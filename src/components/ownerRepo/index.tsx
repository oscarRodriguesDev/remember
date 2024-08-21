'use client'
import { useState,useEffect } from "react"
import Image from "next/image";

interface DataProps{
foto:string;
name:string;
}

export function OwnerRepo({foto,name}:DataProps){
    const [show,setShow] =  useState<boolean>(false)
    
    return (
     <>
     { show && (
         <Image src={foto}
         alt="foto do repositorio" 
         width={50}
          height={50}
          style={{borderRadius:50}}
  
          />
     )}
        <button onClick={()=>{
            setShow(!show)
        }}>
            {show ? 'Esconder' : 'Mostrar'}
        </button>

        </>
    )
}