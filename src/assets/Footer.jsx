import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'; 
const Footer = () => {
  return (
    <div className=" bottom-0 right-0 bg-[#11101d] w-full text-white p-[10px] pt-20 md:pt-0 lg:pt-0">
        <div className="flex flex-grow text-[#4fc9d5] pt-10 font-cursive text-2xl pl-0 md:pl-2 lg:pl-16 font-bold sm:text-center md:text-left pb-10 text-center">IAS</div>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 pl-0 md:pl-2 lg:pl-16 text-center md:text-left">
                <p className="font-bold pb-4 ">REACH US</p>
                <p>c-171/2,Block A,Sector-15,UP</p>
                <p>21,PusaRd,WEA,Karoi Bagh,Delhi</p>
                <p>641,1st floor,Mukurjee Nagar,Delhi</p>
                <p>12,Main AB Road,Indore,MadhyaPradesh</p>

            </div>
            <div className="w-full md:w-1/3 pl-0 md:pl-2 lg:pl-16 text-center md:text-left">
                <p className="font-bold pb-4">TOP SEARCHES</p>
                <p>Classroom Programs</p>
                <p>Books and Magazines</p>
                <p>Test Series</p>
                <p>Online Programs</p>
            </div>
            <div className="w-full md:w-1/3 pl-0 md:pl-2 lg:pl-16 text-center md:text-left">
                <p className="font-bold pb-4">CONNECT WITH US</p>
                <p><FontAwesomeIcon icon={faEnvelope} size="sm" style={{color:'#4fc9d5'}} className="pr-2" />star@groupdrishti.in</p>
                <p><FontAwesomeIcon icon={faPhone} size="sm" style={{color:'#4fc9d5'}} className="pr-2"/>English:+91 8010440440</p>
                
            </div>

        </div>
    </div>
  )
}

export default Footer