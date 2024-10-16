import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden  bg-red-50">
      
      <div className="w-full h-[55%] flex flex-row overflow-hidden">
          <div className="w-[45%] h-full flex justify-center items-center">
              <div className="w-[30%] h-full "></div>
              <div className="w-[70%] h-full flex justify-center items-center mt-20">
                   <div className="w-[90%] h-[70%] ml-2">
                     <h2 className="text-violet-500 text-2xl font-bold ml-2">Bootstrap 5 theme</h2> 
                     <h2 className="ml-2 text-xl">crafted by  <b>ThemeWagon</b></h2>                 
                      <h3 className="text-xs ml-2">ThemeWagon offers an wide array of category-oriented</h3>
                      <h3 className="ml-2 text-xs mb-7">Free and Premium  Bootstrap HTML Templates and Themes.</h3>
                      <button class="rounded-md w-[30%] h-7 ml-2 bg-violet-500 text-white tet-sm"> Check Demo</button>
                   </div>
               </div> 
          </div>
          <div className="w-full h-full flex justify-start items-start">
                <Image src="/images/Illusration.png"  
                  width={1280} height={720} className="h-[470px] object-contain" alt="" />
          </div>
      </div>

      <div className="w-full h-[25%]   flex justify-center items-center ">
        <div className="w-[80%] h-[25%] grid grid-cols-5 place-content-center ">
              <div className="">
                  <Image src="/images/google.png"  
                  width={1280} height={420} className="w-[30%] cursor-pointer object-contain" alt="" />
              </div>
              <div>
                 <Image src="/images/netflix.png"  
                  width={1280} height={420} className="w-[30%] cursor-pointer  object-contain" alt="" /> 
              </div>
              <div>
                 <Image src="/images/microsoft.png"  
                  width={1280} height={420} className="w-[35%] cursor-pointer  object-contain" alt="" />
              </div>
              <div>
                <Image src="/images/mailbuster.png"  
                  width={1280} height={420} className="w-[45%] cursor-pointer  object-contain" alt="" /> 
              </div>
              <div>
                <Image src="/images/themewagon.png"  
                  width={1280} height={420} className="w-[35%] cursor-pointer  object-contain" alt="" />
              </div>
          </div>
      </div>

     
    </div>
  );
}
