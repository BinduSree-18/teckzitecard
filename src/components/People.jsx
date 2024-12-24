import React from 'react'

const People = () => {
  return (
    <div className="flex flex-col bg-[#11101d] pt-10">
        <div className="flex flex-col md:flex-col lg:flex-row gap-2 md:gap-2 lg:gap-24">
            <p className="text-4xl md:text-4xl lg:text-5xl text-white font-bold p-2 md:p-2 lg:p-16">What people are saying about us</p>
            <p className="text-xl text-white p-2 md:p-2 lg:p-16">Everything you need to accept card payments and grow your business anywhere on the planet.</p>

        </div>
        <div>
            <div className="flex flex-col md:flex-col lg:flex-row w-full pl-2 md:pl-2 lg:pl-16 gap-1 md:gap-1 lg:gap-24">
                <div className="flex flex-col w-[320px] h-[320px] hover:bg-[#272727] rounded-md inline-flex mt-4 md:mt-4 lg:mt-0 text-center">
                    <p className="pt-4 pl-10"><img src="https://hoooobank.netlify.app/assets/quotes.a87d5e6d.svg"></img></p>
                    <p className="text-white p-6 font-md text-xl">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                    <div className="flex flex-row">
                        <div><p className="pl-10"><img src="https://hoooobank.netlify.app/assets/people01.a772086b.png" className="w-14 h-14"></img></p></div>
                        <div><p className="text-white font-bold pl-4 text-xl">Herman Jensen</p>
                        <p className="text-md text-white pl-4">Founder and leader</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[320px] h-[320px] hover:bg-[#272727] rounded-md inline-flex mt-4 md:mt-4 lg:mt-0">
                    <p className="pt-4 pl-10"><img src="https://hoooobank.netlify.app/assets/quotes.a87d5e6d.svg"></img></p>
                    <p className="text-white p-6 font-md text-xl">Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                    <div className="flex flex-row">
                        <div><p className="pl-10"><img src="https://hoooobank.netlify.app/assets/people02.ee8ce82b.png" className="w-14 h-14"></img></p></div>
                        <div><p className="text-white font-bold pl-4 text-xl">Steve Mark</p>
                        <p className="text-md text-white pl-4">Founder and leader</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[320px] h-[320px] hover:bg-[#272727] rounded-md inline-flex pr-0 md:pr-0 lg:pr-6 mt-4 md:mt-4 lg:mt-0">
                    <p className="pt-4 pl-10"><img src="https://hoooobank.netlify.app/assets/quotes.a87d5e6d.svg"></img></p>
                    <p className="text-white p-6 font-md text-xl">It is usually people in the money business, finance, and international trade that are really rich.</p>
                    <div className="flex flex-row">
                        <div><p className="pl-10"><img src="https://hoooobank.netlify.app/assets/people03.d9f4f98a.png" className="w-14 h-14"></img></p></div>
                        <div><p className="text-white font-bold pl-4 text-xl">Kenn Gallagher</p>
                        <p className="text-md text-white pl-4">Founder and leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default People