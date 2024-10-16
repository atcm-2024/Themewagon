import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function servicios() {
  return (
    <div className="h-[100%] w-screen bg-red-50 flex flex-col justify-center items-center">
        <div className="w-full mt-5 h-[15%] flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-3">Service</h2>
            <h3 className="text-sm ">We offer youth with chances for career development in their practice. We also </h3>
            <h3 className="mb-20 text-sm">support a wide range of services to ensure client satisfaction</h3>
        </div>

        <div className="w-[90%] h-[75%] grid grid-cols-1 md:grid-cols-3 place-content-center overflow-hidden">
            <div className="w-[90%] h-[55%] md:h-[70%] bg-white flex flex-col sm:mt-0 sm:mb-0 md:mt-14 rounded-3xl">
                <Image src="/images/services/icon1.png"  
                      width={1280} height={720} className="h-[25%] md:mb-14 object-contain" alt="" />
                <h2 className="mr-5 ml-5 text-xl mb-5 font-bold" >Send Texts Instantly</h2>
                <h3 className="mr-5 ml-5 text-sm">Financial planning, forecasting and</h3>
                <h3 className="mr-5 ml-5 text-sm">adjusting rapidly with customer</h3>
                <h3 className="mr-5 ml-5 mb-10 text-sm">demands and budgets.</h3>           
                <h3 className="mr-5 ml-5 text-blue-400 text-sm" >Learn More</h3>
            </div>
            <div className="w-[90%]  h-[55%] md:h-[70%] bg-white flex flex-col md:mt-14 rounded-3xl sm:mt-0 sm:mb-0 ">
                  <Image src="/images/services/icon2.png"  
                        width={1280} height={720} className="h-[25%] md:mb-14 object-contain" alt="" />
                  <h2 className="mr-5 ml-5 text-xl mb-5 font-bold " >Better Organized</h2>
                  <h3 className="mr-5 ml-5 text-sm">Latest technology and experienced</h3>
                  <h3 className="mr-5 ml-5 text-sm">guidance, trained HR specialists</h3>
                  <h3 className="mr-5 ml-5 text-sm mb-10">to keep updated.</h3>
                  <h3 className="mr-5 ml-5 text-sm text-blue-400" >Learn More</h3>
            </div>
            <div className="w-[90%]  h-[55%] md:h-[70%] bg-white flex flex-col md:mt-14 rounded-3xl sm:mt-0 sm:mb-0 ">
                <Image src="/images/services/icon3.png"  
                      width={1280} height={720} className="md:mb-14 h-[25%] object-contain" alt="" />
                <h2 className="mr-5 ml-5 text-xl mb-5 font-bold" >Analytical Statistics</h2>
                <h3 className="mr-5 ml-5 text-sm">Messages, real-time reminders,</h3>
                <h3 className="mr-5 ml-5 text-sm">memos, and many more will</h3>
                <h3 className="mr-5 ml-5 text-sm mb-10">keep your team in sync.</h3>
                <h3 className="mr-5 ml-5 text-sm text-blue-400" >Learn More</h3>
            </div>
        </div>
    </div>
  )
}
