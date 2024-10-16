import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    
    
    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center">
        <div className="w-full mt-5 h-[15%] flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-3 mt-3">Blog Spot</h2>
            <h3 className="text-sm ">Blogs are a great method to increase traffic and generate leads. Make a profit.</h3>
            <h3 className="mb-3 text-sm">Get compensated for your efforts. </h3>
        </div>

        <div className="w-screen h-[50%] ">
            <div className="w-full h-full flex justify-center items-center rounded-3xl">
                <Image src="/images/blog/blog.png"  
                      width={1280} height={720} className="h-full w-[350%] object-contain" alt="" />
               
            </div>
            
            
        </div>
    </div>
    
    
  )
}
