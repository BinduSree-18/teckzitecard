import React from 'react'

const Landing = () => {
  return (
    <div className="bg-[#11101d]  w-full text-white overflow-x-hidden">
        <div className="p-[10px]">
        <div className="flex inline-flex flex-row bg-[#272727] w-auto rounded-lg text-center p-[10px]">
        <p><img src="https://hoooobank.netlify.app/assets/Discount.61d9dc08.svg"></img></p>
        <p>20% Discount For 1 Month Account</p>
        </div>
        </div>
        <div className=" flex  flex-col md:flex-row lg:flex-row gap-10">
           <div className="pl-10 w-full md:w-2/3 lg:1/3">
           <p className="text-6xl md:text-7xl font-semibold pt-0 md:pt-8 lg:pt-0">The Next</p>
            <p className="text-6xl md:text-7xl font-semibold text-[#4fc9d5] pt-8">Generation</p>
            <div className="flex flex-col md:flex-row lg:flex-col">
              <div><p className="text-6xl md:text-7xl font-semibold pt-8">Payment</p></div>
              <div><p className="text-6xl md:text-7xl font-semibold pt-8">Method</p></div>
            </div>
            <p className="text-[#e5e7eb] pt-16 text-lg font-semibold pr-0 md:pr-0 lg:pr-28">Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
           </div>
           <div className="w-full text-center md:w-1/6 inline-block cursor-pointer pt-20 flex justify-center items-center h-[0] md:h-[300px]">
           <div className="w-[130px] h-[130px] border border-[#4fc9d5] rounded-full">
           <div className="flex items-center text-center ">
            <p className="text-[#4fc9d5] pl-8 pt-9">Get</p>
            <p className="pt-9"><img src="https://hoooobank.netlify.app/assets/arrow-up.012ff21b.svg"alt="arrow" className="w-4 h-4"></img></p>
            </div>
            <p className="text-[#4fc9d5]">Started</p>
           </div>
            </div>
            
           <div className="w-full md:w-full lg:w-1/2">
            <img src="https://hoooobank.netlify.app/assets/robot.352cd501.png"className="w-full md:w-full lg:[600px] block md:hidden lg:block"></img>
           </div>
            
        </div>
        <img src="https://hoooobank.netlify.app/assets/robot.352cd501.png"className="w-full md:w-full lg:[600px] hidden md:block lg:hidden"></img>
        <div className="flex flex-col md:flex-col lg:flex-row p-[30px] w-full gap-0 md:gap-0 lg:gap-40">
          <div className="flex flex-col md:flex-row lg:flex-row w-full md:w-full lg:w-2/3 gap-0  lg:gap-40">
          <div className="flex w-full md:1/2 lg:1/2">
            <div className="flex flex-row">
              <p className="font-bold text-5xl">3800+</p>
              <div className="flex flex-row md:flex-col lg:flex-row pt-3 md:pt-1 lg:pt-3">
                <p className="text-[#4fc9d5] text-xl">Active</p>
                <p className="text-[#4fc9d5] text-xl">Users</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:1/2 lg:1/2">
            <div className="flex flex-row">
              <p className="font-bold text-5xl">230+</p>
              <div className="flex flex-row md:flex-col lg:flex-row pt-3 md:pt-1 lg:pt-3">
                <p className="text-[#4fc9d5] text-xl">Companies</p>
                <p className="text-[#4fc9d5] text-xl">Trusted</p>
              </div>
            </div>

          </div>
          </div>
          <div className="flex w-full md:1/2 lg:1/3">
            <div className="flex flex-row">
              <p className="font-bold text-5xl">$230M+</p>
                <p className="text-[#4fc9d5] text-xl pt-3">Transactions</p>
            </div>

          </div>


        </div>
        
    </div>
  )
}

export default Landing