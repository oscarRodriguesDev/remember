'use client'
import Link from "next/link"
import { useEffect } from "react"
const Error = ({error,reset}:{error:Error, reset:()=>void})=>{
    return(
        <div>
        <h1>Ocorreu um erro ao tentar exibir a pagina</h1>
    <Link href="/">Voltar para a pagina principal</Link>
        </div>
    )
}

export default Error