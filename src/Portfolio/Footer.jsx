import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-blue-200">
        <div className="flex flex-col md:flex-row pr-[50px] pl-[50px] pt-[40px] pb-[20px] gap-4 md:flex-wrap lg:flex-nowrap" >
            <div className="w-full lg:w-[22%] md:w-full lg:text-left pl-0 md:pl-[2px]">
                <p className="text-xl font-bold">TECHBUGGY</p>
                <p className="text-md pt-3 lg:pr-4 pr-0">Lorem ipsum is simply dummy text of  the  printing and  typesetting industry.Lorem ipsum has been the industry's standard dummy a type specimen book</p>
            </div>
            <div className="w-full lg:w-[20%] md:w-[40%] lg:pl-24 pl-0  lg:text-left">
              <p className="font-bold text-xl">Company</p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan/><span>About US</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>How to</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>Popular Course</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>Service</span></p>
            </div>
            <div className="w-full lg:w-[20%] md:w-[40%] lg:pl-16 pl-0  lg:text-left">
              <p className="text-xl font-bold">Subject</p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>VLIC</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>DVMC</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>BEEE</span></p>
            </div>
            <div className="w-full lg:w-[20%] md:w-[40%] lg:pl-10 pl-0 lg:text-left">
              <p className="text-xl font-bold">Support</p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>FAQ</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>Help Center</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>Privacy</span></p>
            </div>
            <div className="w-full lg:w-[20%] md:w-[40%] lg:pl-2 pl-0  lg:text-left">
              <p className="text-xl font-bold">Contact Info</p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>+91 123456789</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>TECHBUGGY2222@gmail.com</span></p>
              <p className="text-md lg:text-sm pt-3 flex"><FaGreaterThan className="mr-2"/><span>Nuzvid Krishna district,Andhra Pradesh</span></p>
            </div>
           

        </div>
        <div className="pt-2 pb-4 w-full"><hr className="border-black mt-2 border-gray-500 border-3"></hr></div>
        <div className="flex justify-center font-semibold"><p className="pb-2">Techbuggy All right Reserved,2024</p></div>
       
    </div>
  )
}

export default Footer