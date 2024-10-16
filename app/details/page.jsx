import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function page() {
  return (
    
    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[75%] h-[50%] flex flex-row justify-center items-center mt-3">
                <div className="w-[50%]">
                < Image src="/images/details/illustration3.png"  
                      width={1280} height={420} className=" md:mt-4 mb-2 object-contain w-[75%] h-full" alt="" />
                </div>
                <div className="w-[50%] mt-4">
                  <h2 className="text-2xl mb-1 mt-3">A creative team which</h2>
                  <h2 className="text-2xl mb-3 ">builds stunning UI/UX</h2>
                  <h3 className="text-xs ">Today, I'd like to show you some incredible Sign Up screen app.</h3>
                  <h3 className="text-xs">UI ideas and concepts that offer a modern user experience.</h3>
                  <h3 className="text-xs mb-5">The most stunning, cutting-edge UI/UX.</h3>
                  <h3 className="text-xs">Klean is a free Bootstrap 5 template for multipurpose landing</h3>
                  <h3 className="text-xs">pages. This design is a perfect choice, carefully curated by</h3>
                  <h3 className="text-xs mb-6">ThemeWagon</h3>
                  <button className="bg-transparent text-sm border w-20 h-7 border-zinc-400 rounded-md text-violet-400">Read More</button>         
                </div>
                
            </div>
            <div className="w-[75%] h-[60%] flex flex-row justify-center items-center mt-4 ">                
                <div className="w-[50%]">
                  <h2 className="text-2xl mb-1 mt-3">A creative team which</h2>
                  <h2 className="text-2xl mb-3 ">builds stunning UI/UX</h2>
                  <h3 className="text-xs ">Today, I'd like to show you some incredible Sign Up screen app.</h3>
                  <h3 className="text-xs">UI ideas and concepts that offer a modern user experience.</h3>
                  <h3 className="text-xs mb-5">The most stunning, cutting-edge UI/UX.</h3>
                  <h3 className="text-xs">Klean is a free Bootstrap 5 template for multipurpose landing</h3>
                  <h3 className="text-xs">pages. This design is a perfect choice, carefully curated by</h3>
                  <h3 className="text-xs mb-6">ThemeWagon</h3>
                  <button className="bg-transparent text-sm border w-20 h-7 border-zinc-400 rounded-md text-violet-400">Read More</button>         
                </div>
                <div className="w-[50%]">
                < Image src="/images/details/illustration6.png"  
                      width={1280} height={420} className=" md:mt-4 mb-2 object-contain w-[75%] h-full" alt="" />
                </div>
            </div>
    </div>



  )
}
