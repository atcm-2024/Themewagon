import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    
    
    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full mt-10 h-[110px] flex flex-col justify-center items-center">
                <h2 className="text-3xl mb-3 mt-5">Our team</h2>
                <h3 className="text-sm ">People from various origins, cultures, and personalities make up our team.</h3>
                <h3 className="mb-20 text-sm">This blend makes it a powerful team</h3>
            </div>

            <div className="w-[90%] grid md:grid-rows-1 grid-cols-1 md:grid-flow-col md:grid-cols-4 h-[55%] place-content-center ">
                <div className="w-[90%] h-[40%] md:h-[60%] flex flex-col justify-center items-center sm:mt-0 sm:mb-0 md:mt-8 rounded-3xl ">
                    <Image src="/images/team/image1.png"  
                        width={1280} height={420} className="h-full md:mt-4 mb-2 object-contain" alt="" />
                    <h2 className="mr-5 ml-5 text-xl mb-1 font-bold" >John Adams</h2>
                    <h3 className="mr-5 ml-5 text-sm">CEO</h3> 
                </div>
                <div className="w-[90%] h-[40%] md:h-[60%] flex flex-col justify-center items-center md:mt-8 rounded-3xl sm:mt-0 sm:mb-0 ">
                    <Image src="/images/team/image2.png"  
                            width={1280} height={420} className="h-full md:mt-4 mb-2 object-contain" alt="" />
                    <h2 className="mr-5 ml-5 text-xl mb-1 font-bold " >Carrey Johnson</h2>
                    <h3 className="mr-5 ml-5 text-sm">Senior Developer</h3>
                </div>
                <div className="w-[90%]  h-[40%] md:h-[60%] flex flex-col justify-center items-center  md:mt-8 rounded-3xl sm:mt-0 sm:mb-0 ">
                    <Image src="/images/team/image3.png"  
                        width={1280} height={420} className="md:mt-4 mb-2  h-full object-contain" alt="" />
                    <h2 className="mr-5 ml-5 text-xl mb-1 font-bold" >Ray Marie</h2>
                    <h3 className="mr-5 ml-5 text-sm">Developer</h3>
                </div>
                <div className="w-[90%] h-[40%] md:h-[60%] flex flex-col justify-center items-center sm:mt-8 sm:mb-0 md:mt-8 rounded-3xl">
                    <Image src="/images/team/image4.png"  
                        width={1280} height={420} className="h-full md:mt-4 mb-2  object-contain" alt="" />
                    <h2 className="mr-5 ml-5 text-xl mb-1 font-bold" >Austin Min</h2>
                    <h3 className="mr-5 ml-5 text-sm">Designer</h3>  
                </div>
            </div>
            <div className="w-[90%] h-[10%] flex justify-center items-center ">
                    <button className="bg-transparent text-sm border w-32 h-7 border-zinc-400 rounded-md text-violet-400">View Full Team</button>
            </div>
    </div>



  )
}
