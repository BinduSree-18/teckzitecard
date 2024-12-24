import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Texk = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col rounded-[20px] bg-black w-[370px] h-[464px] relative group overflow-hidden">
        <div className=" absolute inset-0 z-0"
            style={{
                background: "linear-gradient(to bottom, black, #200932, black)",
              }}
              ></div>
              <div className="absolute w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-0 z-0"
                style={{
                  background:"url('https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/bg-team-bf.webp')",
                }}>
              </div>
            <div className="relative flex justify-center pt-[20px]"><p className="text-3xl font-bold text-white">Darlene Robertson</p></div>
            <div className="relative flex justify-center  pb-[10px] pt-[10px] text-lg"><p className="text-orange-500">Chief Technology Officer</p></div>

              <div className="pt-10px relative group-hover:transform group-hover:translate-x-4 duration-700">
                <img src="https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/img-team2-h3.webp"></img>

              </div>
              <div className="absolute bottom-0 left-0 mb-5 ml-4 text-white font-bold"><CiCirclePlus  className="size-[50px] font-semibold "/>

              </div>
                <a href="#"><div className="absolute bottom-16 left-0 opacity-0 group-hover:opacity-100 trasition-opacity duration-700 mb-3 ml-4 duration-500 tranform group-hover:translate-y-0 translate-y-14"><FaFacebookF  className="text-white size-[42px] bg-gradient-to-r  from-purple-600 to-orange-600 rounded-full p-[10px] ml-1"/></div></a>
                <a href="#"><div className="absolute bottom-28 left-0 opacity-0 group-hover:opacity-100 trasition-opacity duration-700 mb-3 ml-4 duration-500 transform group-hover:translate-y-0 translate-y-28"><FaLinkedinIn   className="text-white size-[42px] bg-gradient-to-r  from-purple-600 to-orange-600 rounded-full p-[10px] ml-1 mt-2 mb-1"/></div></a>
                <a href="#"><div className="absolute bottom-40 left-0 opacity-0 group-hover:opacity-100 trasition-opacity duration-700 mb-3 ml-4 duration-500 transform group-hover:translate-y-0 translate-y-28"><FaXTwitter   className="text-white size-[42px] bg-gradient-to-r  from-purple-600 to-orange-600 rounded-full p-[10px] ml-1 mb-1 mt-3"/></div></a>
                <a href="#"><div className="absolute bottom-52 left-0 opacity-0 group-hover:opacity-100 trasition-opacity duration-700 mb-3 ml-4 duration-500 transform group-hover:translate-y-0 translate-y-28"><FaInstagram   className="text-white size-[42px] bg-gradient-to-r  from-purple-600 to-orange-600 rounded-full p-[10px] ml-1 mb-1"/></div></a>
        </div>

    </div>
    
  )
}

export default Texk