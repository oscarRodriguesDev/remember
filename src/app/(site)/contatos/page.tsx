import { Metadata } from "next"
export const metadata: Metadata = {
  title: 'Página de contatos',
  description: 'Página que carrega os  contatos',
  keywords:'javascript, next, css, javascript, vercel',
  openGraph:{
    images:['https://www.granjaloureiro.com.br/ovo-de-codorna-x-ovo-de-galinha/']
  }
  //lista de tags meta na w3scholl
}
export default function Contatos(){
  return(
    <div>
      <h1>Página de contatos</h1>
      <span>(xx) 000230-2323</span>
    </div>
  )
}