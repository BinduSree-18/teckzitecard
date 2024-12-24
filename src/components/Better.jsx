import React from 'react'

const Better = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row p-10 bg-[#11101d]">
        <div className="flex w-full md:w-full lg:w-1/2">
           <div className="flex flex-col">
           <p className="text-4xl md:text-4xl lg:text-5xl text-white font-bold pt-20">Find a better card deal
            in few easy steps</p>
            <p className="pt-14 text-[#e5e7eb] text-xl pr-0 md:pr-0 lg:pr-40">We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</p>
            <p className="pt-10"><button className="text-black rounded-md font-bold p-4 bg-[#4fc9d5]">Get Started</button></p>
           </div>
           </div>
           <div className="flex w-full md:w-full lg:w-1/2 p-0 md:p-0 lg:p-10 pt-4 md:pt-4 lg:pt-10">
            <img src="https://hoooobank.netlify.app/assets/card.af071def.png"></img>
           </div>
    </div>
  )
}

export default Better