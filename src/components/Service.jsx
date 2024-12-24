import React from 'react'

const Service = () => {
  return (
    <div className="bg-[#11101d] p-10 flex-col md:flex-col lg:flex-row">
        <div className="flex bg-[#272727] rounded-md p-10 flex-col w-full md:w-full lg:w-[75%]">
            <div><p className="text-5xl text-white font-bold">Come try our service now!</p></div>
            <div className="pr-2 md:pr-2 lg:pr-72 pt-4 font-light"><p className="text-white text-xl pr-20">Everything you need to accept card payments and grow your business anywhere on the planet.</p></div>
        </div>
        <div className="flex w-full md:w-full lg:w-[25%]">
            <button className="rounded-md p-6 bg-[#4fc9d5]">GetStarted</button>
        </div>
    </div>
  )
}

export default Service