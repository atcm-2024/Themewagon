import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    
    
    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full mt-10 h-[8%] flex flex-col justify-center items-center">
                <h2 className="text-3xl mb-3 mt-3">What our clients have to say</h2>
                <h3 className="text-sm ">Our success is determined on how satisfied our customers are with the</h3>
                <h3 className="mb-20 text-sm">service. These reviews say we have stuff to do.</h3>
          </div>
        <div className="w-[80%] h-[80%] flex flex-row justify-center items-center">
            <div className="w-[50%] h-[80%]  flex flex-col justify-center items-center">
            < Image src="/images/testimonial/image1.png"  
                  width={1280} height={420} className=" mb-24 object-contain w-[80%] h-[80%]" alt="" />
            </div>
            <div className="w-[70%] h-[70%] flex ">                
              <div className="w-[70%] h-[80%] mb-14">
              < Image src="/images/testimonial/fingerUp.png"  
                  width={1280} height={420} className=" md:mt-4 mb-2 object-contain w-[20%] h-[20%]" alt="" />
                <h2 className="text-2xl mb-6 mt-3 text-violet-500">Outstanding!!</h2>
                <h3 className="text-xs ">I just wanted to drop you a little email to say thank you for all your hard work.</h3>
                <h3 className="text-xs">I'm delighted I chose you as my partner. Your websites are quite simple to edit</h3>
                <h3 className="text-xs mb-5">and maintain, which is fantastic.</h3>
                <div className="flex flex-row">
                  < Image src="/images/testimonial/estrella.png"  
                    width={1280} height={420} className=" md:mt-4 mb-8 object-contain w-[14px] h-[14px]" alt="" />                
                    < Image src="/images/testimonial/estrella.png"  
                    width={1280} height={420} className=" md:mt-4 mb-8 object-contain w-[14px] h-[14px]" alt="" />                
                    < Image src="/images/testimonial/estrella.png"  
                    width={1280} height={420} className=" md:mt-4 mb-8 object-contain w-[14px] h-[14px]" alt="" />                
                    < Image src="/images/testimonial/estrella.png"  
                    width={1280} height={420} className=" md:mt-4 mb-8 object-contain w-[14px] h-[14px]" alt="" />                
                    < Image src="/images/testimonial/estrella.png"  
                    width={1280} height={420} className=" md:mt-4 mb-8 object-contain w-[14px] h-[14px]" alt="" />                
                </div>
                <h3 className="text-xs mb-6"><b>Daniel Lane</b>, Developer</h3>
                
              </div>
        </div>
            
        </div>
        
    </div>




  )
}
