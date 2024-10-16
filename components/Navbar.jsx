import React from 'react'
import Link from 'next/link'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 h-16 w-screen cursor-pointer items-center text-black">
      <div className='h-16 w-full cursor-pointer items-center md:flex md:flex-row'>
        <div className="md:w-[70%] w-full flex flex-row justify-center items-center gap-4">
                <figure>
                    <Image src="/images/Klean.png" className="w-16 h-6" width={1280} height={420}/>
                </figure>
                <ul className="flex gap-4">
                  <li>
                    <Link href="/" className="text-xs">
                      Home 
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-xs">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-xs">
                    Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/details" className="text-xs">
                    Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-xs">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-xs">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonial" className="text-xs">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-xs">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-xs">
                      Contact
                    </Link>
                  </li>
                </ul>
          </div>
          <div className="md:w-[30%] w-full  gap-8 flex md:flex-row md:justify-center md:items-center">
              <label className="text-xs text-blue-400">Log in</label>
              <button className="w-20 h-7 rounded-md text-xs border border-zinc-400 text-blue-400">Sign Up</button>
          </div>
          </div>
      </nav>
  )
}
