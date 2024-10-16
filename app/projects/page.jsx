import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
   
    


    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center overflow-hidden">
    <div className="w-full h-[110px] flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-3 mt-5">Our Projects</h2>
        <h3 className="text-sm ">A project is a single or team activity, combining research and design with best</h3>
        <h3 className=" text-sm mb-10">effort. Here are some of our team's project</h3>
    </div>

    <div className="w-[70%] h-[80%] grid grid-flow-col grid-cols-3 gap-4 place-content-center ">
        <div className="row-start-1  row-span-1 ">
            <Image src="/images/projects/image1.png"  
                  width={1280} height={420} className="w-72 h-52 marker:selection:object-contain" alt="" /> 
        </div>
        <div className="row-start-2 row-span-2 ">
              <Image src="/images/projects/image2.png"  
                    width={1280} height={420} className="w-72 h-[350px]  object-contain" alt="" />
        </div>
        <div className="row-start-1 row-span-2">
            <Image src="/images/projects/image3.png"  
                  width={1280} height={420} className="w-72 h-[350px] " alt="" />
        </div>
        <div className="row-start-3 row-span-1">
            <Image src="/images/projects/image4.png"  
                  width={1280} height={420} className="w-72 h-52" alt="" />
        </div>
        <div className="row-start-1 row-span-1">
              <Image src="/images/projects/image5.png"  
                    width={1280} height={420} className="w-72 h-52 " alt="" />
        </div>
        <div className="row-start-2 row-span-2">
            <Image src="/images/projects/image6.png"  
                  width={1280} height={420} className="w-72 h-[350px] object-contain" alt="" />
        </div>
    </div>
    <div className="">
      <button className="bg-transparent text-sm border w-20 h-7 border-zinc-400 rounded-md text-violet-400">View More</button>         
    </div>
</div>
    
  )
}
