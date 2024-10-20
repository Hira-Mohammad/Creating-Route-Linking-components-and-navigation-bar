// 1) Create 4 route pages: Navbar, About, Contact and Footer.
// 2) Link all components together using the "link" component.
// 3)Add navigation for all routes using buttons and useRouter.
'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"



export default function Home(){
  const route = useRouter()

    return(
        <div>
      
      <h1>This is Home Page</h1>
      <ul>
      {/* <li><Link href='./'>Home</Link></li> */}
      <li><Link href='./navbar'>Navbar</Link></li>
      <li><Link href='./about'>About</Link></li>
      <li><Link href='./contact'>Contact</Link></li>
      <li><Link href='./footer'>Footer</Link></li>
      </ul>
      
    </div>
  )
};

