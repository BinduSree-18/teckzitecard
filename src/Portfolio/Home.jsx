import React from 'react'

const Home = () => {
  return (
    <div>
    <div className="flex justify-center items-center bg-[#11101d]">
    <div className="flex flex-col w-full  md:w-[1000px] p-4 md:p-16 gap-2 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4xiLEoDvYy14Mje6ExFRuTlZWxfQYprT5A&s')] bg-no-repeat bg-cover">
        <div className="w-full flex flex-col">
            <div className="text-center ">
                <p className="text-4xl text-white font-bold pb-6 pt-2 md:pt-12"><span>Hi!</span><span className="text-white text-3xl font-semibold">
                    I am 
                </span>  <span className="text-[#00CC00] text-3xl font-bold">
                    Bindu Sree
                </span></p>
                
              
               <p className="pb-4"><span className="text-white text-3xl">
                    a 
                </span><span className="text-[#00CC00] text-4xl font-bold ">Frontend developer</span></p>
                <p><span className="text-xl font-semibold text-white">with a focus on creating user-friendly, responsive, and engaging web experiences.</span><span class="text-xl font-semibold text-white">I specialize in building seamless user interfaces with modern technologies like<span class="text-[#00CC00]">HTML, CSS, JavaScript, and frameworks such as React.js</span></span> </p>
               
                <p className="pt-6"><button className="rounded-[24px] p-[12px] bg-[#00FF00] w-[150px] font-bold">Hire me</button></p>
            </div>

       

    </div>
    </div>
    </div>
    </div>
  )
}

export default Home