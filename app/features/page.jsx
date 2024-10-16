import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function page() {
  return (

    <div className="h-screen w-screen bg-red-50 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full mt-10 h-[110px] flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-3">Features</h2>
            <h3 className="text-sm ">We provide a number of excellent features that will undoubtedly improve the </h3>
            <h3 className="mb-20 text-sm">user experience. We also provide a better support system</h3>
        </div>

        <div className="w-[90%] grid md:grid-rows-2 grid-cols-1 md:grid-flow-col md:grid-cols-3 h-[85%] place-content-center ">
            <div className="w-[90%] h-[40%] md:h-[60%] bg-white flex flex-col justify-center items-center sm:mt-0 sm:mb-0 md:mt-8 rounded-3xl ">
                <Image src="/images/features/icon1.png"  
                      width={1280} height={420} className="h-[40%] md:mt-4 mb-2 object-contain" alt="" />
                <h2 className="mr-5 ml-5 text-xl mb-4 font-bold" >Encrypted Mail</h2>
                <h3 className="mr-5 ml-5 text-sm"> A process of encrypting email</h3>
                <h3 className="mr-5 ml-5 text-sm">communications</h3>         
            </div>
            <div className="w-[90%] h-[40%] md:h-[60%] bg-white flex flex-col justify-center items-center md:mt-8 rounded-3xl sm:mt-0 sm:mb-0 ">
                  <Image src="/images/features/icon4.png"  
                        width={1280} height={420} className="h-[40%] md:mt-4 mb-2 object-contain" alt="" />
                  <h2 className="mr-5 ml-5 text-xl mb-4 font-bold " > App App Assistance</h2>
                  <h3 className="mr-5 ml-5 text-sm">App Assistant is quickly and effectivelyd</h3>
                  <h3 className="mr-5 ml-5 text-sm"> ran the system</h3>
            </div>
            <div className="w-[90%]  h-[40%] md:h-[60%] bg-white flex flex-col justify-center items-center  md:mt-8 rounded-3xl sm:mt-0 sm:mb-0 ">
                <Image src="/images/features/icon2.png"  
                      width={1280} height={420} className="md:mt-4 mb-2  h-[40%] object-contain" alt="" />
                <h2 className="mr-5 ml-5 text-xl mb-4 font-bold" >Display Sharing</h2>
                <h3 className="mr-5 ml-5 text-sm">With other participants, you may share</h3>
                <h3 className="mr-5 ml-5 text-sm">your screen</h3>
            </div>
            <div className="w-[90%] h-[40%] md:h-[60%] bg-white flex flex-col justify-center items-center sm:mt-8 sm:mb-0 md:mt-8 rounded-3xl">
                <Image src="/images/features/icon5.png"  
                      width={1280} height={420} className="h-[40%] md:mt-4 mb-2  object-contain" alt="" />
                <h2 className="mr-5 ml-5 text-xl mb-5 font-bold" >Multiple Printing </h2>
                <h3 className="mr-5 ml-5 text-sm">Our canvas prints are crafted on</h3>  
                <h3 className="mr-5 ml-5 text-sm">top-notch canvas.</h3>  
            </div>
            <div className="w-[90%]  h-[40%] md:h-[60%] bg-white flex flex-col justify-center items-center md:mt-8 rounded-3xl sm:mt-0 sm:mb-0 ">
                  <Image src="/images/features/icon3.png"  
                        width={1280} height={420} className="h-[40%] mb-2 md:mb-4 object-contain" alt="" />
                  <h2 className="mr-5 ml-5 text-xl mb-5 font-bold " >Private Notebook</h2>
                  <h3 className="mr-5 ml-5 text-sm">Private Notebook is an application that</h3>
                  <h3 className="mr-5 ml-5 text-sm">is protected</h3>
            </div>
            <div className="w-[90%]  h-[40%] md:h-[60%] bg-white flex flex-col justify-center items-center md:mt-8 rounded-3xl sm:mt-0 sm:mb-0 ">
                <Image src="/images/features/icon6.png"  
                      width={1280} height={420} className="md:mt-4 mb-2 h-[40%] object-contain" alt="" />
                <h2 className="mr-5 ml-5 text-xl mb-5 font-bold" >Free Sketch</h2>
                <h3 className="mr-5 ml-5 text-sm"> Our canvas prints are crafted on</h3>
                <h3 className="mr-5 ml-5 text-sm">top-notch canvas.</h3>
            </div>
        </div>
    </div>
  )
}
