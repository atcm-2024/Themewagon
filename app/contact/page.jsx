import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function page() {
  return (
   
    
    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full mt-10 h-full flex flex-col justify-center items-center">
                <h2 className="text-3xl ">Contact Us</h2>  
                <Image src="/images/contact/contact.png"  
                      width={1280} height={720} className="mb-32 h-full w-full object-contain" alt="" />                    
        </div>  
</div>



  )
}
