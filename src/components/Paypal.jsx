import React from 'react'

const Paypal = () => {
  return (
    <div className="flex flex-col-reverse  md:flex-col lg:flex-row w-full bg-[#11101d]  p-6 md:p-10 flex-reverse">
        <div className="flex w-full lg:1/2">
            <img src="https://hoooobank.netlify.app/assets/bill.fd47dad8.png"></img>
        </div>
        <div className="flex w-full lg:1/2 p-0 md:p-10 flex-col">
            <p className="text-5xl text-white font-bold pt-20 pr-10">Easily control your billing & invoicing. </p>
            <p className="text-white text-xl pt-10 pr-10">We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.</p>
            <div className="flex flex-row pt-10 gap-4">
                <div><img src="https://hoooobank.netlify.app/assets/apple.994d47a8.svg"></img></div>
                <div><img src="https://hoooobank.netlify.app/assets/google.3035153f.svg"></img></div>
            </div>
        </div>

    </div>
  )
}

export default Paypal