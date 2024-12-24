import React,{useState} from 'react'

const Header = () => {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
  return (
    <div className="bg-[#11101d] h-auto w-full overflow-x-hidden">
        <div className="flex justify-between p-[10px] text-white font-bold">
            <img src="https://hoooobank.netlify.app/assets/logo.efc6c435.svg" className="w-[120px] h-[120px]"></img>
           <div className="flex flex-row gap-4 hidden md:flex pt-12">
           <p className="cursor-pointer pl-2">Home</p>
            <p className="cursor-pointer pl-2">Features</p>
            <p className="cursor-pointer pl-2">Products</p>
            <p className="cursor-pointer pl-2">Clients</p>
           </div>
           <div className="flex md:hidden float-right relative">
            {
                isMenuOpen ? (
                    <img src="https://hoooobank.netlify.app/assets/close.945782e8.svg" className="cursor-pointer" onClick={()=>setIsMenuOpen(false)}>
                    </img>
                ):(
                    <img src="https://hoooobank.netlify.app/assets/menu.e0613cf3.svg" className="cursor-pointer"
                     onClick={()=>setIsMenuOpen(true)}></img>
                )
            }


        </div>
        {
            isMenuOpen &&(
                <div className="absolute top-[60px] left-0 w-screen md:hidden bg-[#272727]">
                    <div className="flex flex-col  text-white p-[20px] bg-[#272727] rounded-2xl">
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">Features</p>
                    <p className="cursor-pointer">Products</p>
                    <p className="cursor-pointer">Clients</p>
                   </div>
                </div>

            )
        }
    </div>
    </div>
       
  )
}

export default Header