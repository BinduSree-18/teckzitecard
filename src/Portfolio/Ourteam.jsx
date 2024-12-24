import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Ourteam = () => {
  return (
    <div>
        <div className="text-2xl font-semibold  flex justify-center i">Our Team</div>
        <div className="text-gray-500 font-semibold flex justify-center pt-3">Lorem ipsum is simply dummy text of printing</div>
        <div className="flex flex-col lg:flex-row gap-20 p-[70px] justify-center items-center">
            <div className="flex p-[14px] border border-2 flex-col h-[400px] rounded-md md:w-[400px]">
                <div className="flex h-[50px] bg-gray-200 h-[60%] rounded-md"></div>
                <div classname="text-xl pt-2 text-black-500 font-bold">RAJ K</div>
                <div className="text-gray-700">Backend</div>
                <div className="text-gray-400 font-semibold text-md">Ut enim and minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo</div>
               <div className="flex flex-row items-center">
               <div className="text-orange-400 font-bold pr-2 text-xs md:text-lg lg:text-sm pt-2">TEAM TEACHBUGGY</div>
                <span><a href="https://www.instagram.com"><FaInstagram className="h-[20px] w-[20px] mr-2 mt-2 md:ml-10"/></a></span>
                <span><a href="https://in.linkedin.com"><FaLinkedin className="h-[20px] w-[20px] mt-2 md:ml-4"/></a></span>
               </div>
            </div>
            <div className="flex p-[14px] border border-2 flex-col h-[400px] rounded-md md:w-[400px]">
                <div className="flex h-[50px] bg-gray-200 h-[60%] rounded-md"></div>
                <div classname="text-xl pt-2 text-black-500 font-bold">RAJ K</div>
                <div className="text-gray-700">Backend</div>
                <div className="text-gray-400 font-semibold text-md">Ut enim and minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo</div>
               <div className="flex flex-row items-center">
               <div className="text-orange-400 font-bold pr-2 text-xs lg:text-sm md:text-lg pt-2">TEAM TEACHBUGGY</div>
               <span><a href="https://www.instagram.com"><FaInstagram className="h-[20px] w-[20px] mr-2 mt-2 md:ml-10"/></a></span>
                <span><a href="https://in.linkedin.com"><FaLinkedin className="h-[20px] w-[20px] mt-2 md:ml-4"/></a></span>
               </div>
            </div>
            <div className="flex p-[14px] border border-2 flex-col h-[400px] rounded-md md:w-[400px]">
                <div className="flex h-[50px] bg-gray-200 h-[60%] rounded-md"></div>
                <div classname="text-xl pt-2 text-black-500 font-bold">RAJ K</div>
                <div className="text-gray-700">Backend</div>
                <div className="text-gray-400 font-semibold text-md">Ut enim and minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo</div>
               <div className="flex flex-row items-center">
               <div className="text-orange-400 font-bold pr-2 text-xs lg:text-sm md:text-xl pt-2">TEAM TEACHBUGGY</div>
               <span><a href="https://www.instagram.com"><FaInstagram className="h-[20px] w-[20px] mr-2 mt-2 md:ml-10"/></a></span>
                <span><a href="https://in.linkedin.com"><FaLinkedin className="h-[20px] w-[20px] mt-2 md:ml-4"/></a></span>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Ourteam