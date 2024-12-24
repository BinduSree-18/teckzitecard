import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
  return (
    <div className="h-full w-full overflow-x-hidden  top-0 left-0 relative">
        <div className="flex justify-between  text-white font-bold bg-[#11101d]">
           <p className="text-[#00CC00] pt-10 font-cursive text-2xl ">Portfolio</p>
           <div className="flex flex-row gap-4 hidden md:flex pt-12">
            <p className="cursor-pointer pl-2"><Link to="/Home">Home</Link></p>
            <p className="cursor-pointer pl-2"><Link to="/About">About</Link></p>
            <p className="cursor-pointer pl-2"><Link to="/AllCourses">Projects</Link></p>
            <p className="cursor-pointer pl-2"><Link to="/CurrentAffairs">Contact</Link></p>
            {/*<p className="cursor-pointer pl-2"><Link to="/DailyPractice">DailyPractice</Link></p>
            <p className="cursor-pointer pl-2"><Link to="/FreeResources">FreeResources</Link></p>
            <p className="cursor-pointer pl-2"><Link to="/Datafetching">Datafetching</Link></p>*/}
           </div>
           <div className="flex md:hidden float-right relative pt-4">
            {
                isMenuOpen ? (
                    <img src="https://hoooobank.netlify.app/assets/close.945782e8.svg" className="cursor-pointer" onClick={()=>setIsMenuOpen(false)}></img>
                ):(
                    <img src="https://hoooobank.netlify.app/assets/menu.e0613cf3.svg" className="cursor-pointer"
                     onClick={()=>setIsMenuOpen(true)}></img>
                )
            }


        </div>
        {
            isMenuOpen &&(
                <div className="absolute top-[100px] right-0 w-screen md:hidden pl-48">
                <div className="flex flex-col items-end text-white p-[20px] bg-[#272727] rounded-2xl">
                <p className="cursor-pointer pl-2"><Link to="/Home">Home</Link></p>
                  <p className="cursor-pointer"><Link to="/About">About</Link></p>
                  <p className="cursor-pointer"><Link to="/AllCourses">Projects</Link></p>
                  <p className="cursor-pointer"><Link to="/CurrentAffairs">Contacts</Link></p>
                  {/*<p className="cursor-pointer"><Link to="/DailyPractice">DailyPractice</Link></p>
                  <p className="cursor-pointer"><Link to="/FreeResources">FreeResources</Link></p>
                  <p className="cursor-pointer"><Link to="/Datafetching">Datafetching</Link></p>*/}
                </div>
              </div>
              
            )
        }
    </div>
    </div>
  )
}

export default Navbar