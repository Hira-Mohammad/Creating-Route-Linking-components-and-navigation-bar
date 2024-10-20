'use client' 
 import link from 'next/link'
 import image from "next/image";
 import { useRouter } from "next/navigation"

 export default function Home(){
     const route = useRouter()

     return(
         <>
        <h1> This is Navbar</h1>
        <button onClick={()=>route.push('./')}> Go To HomePage</button><br />
         <button onClick={()=>route.push('./about')}> Go To About</button><br />
         <button onClick={()=>route.push('./footer')}> Go To Footer</button><br />
         <button onClick={()=>route.push('./contact')}> Go To Contact</button><br />
         
         
         
         </>
     );
 }