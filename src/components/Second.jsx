import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faShield,faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
const Second = () => {
  return (
    <div className="bg-[#11101d] w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row w-full px-4 lg:px-8">
            <div className="w-full md:w-full lg:w-1/2 pl-0 md:pl-0 lg:pl-6">
                <p className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold pt-6">You do the business we'll handle the money.</p>
                <p className="text-[#e5e7eb] text-lg md:text-xl font-semibold pt-6 pb-6">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <p><button className="rounded-md bg-[#4fc9d5] p-[16px] text-black font-semibold text-xl">GetStarted</button></p>
            </div>
            <div className="w-full lg:w-1/2 pt-10 lg:pt-0 flex flex-col gap-6 p-0 md:p-0 lg:p-10">
            <div className="flex flex-row">
            <div className="pt-4"><FontAwesomeIcon icon={faStar} size="2x" style={{color:'#3ecdea'}}  className="rounded-full bg-[#272727] p-[12px]"/></div>
            <div><p className="text-lg md:text-xl font-bold text-white pl-4">Rewards</p>
              <p className="text-xl md:text-lg text-[#e5e7eb] pr-16 pl-4">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            </div>
            
            </div>
            <div className="flex flex-row">
            <div className="pt-12"><FontAwesomeIcon icon={faShield} size="2x" style={{color:'#3ecdea'}}  className="rounded-full bg-[#272727] p-[12px]"/></div>
            <div><p className="text-xl font-bold text-white pl-4 pt-10">100% Secure</p>
            <p className="text-xl text-[#e5e7eb] pr-16 pl-4">We take proactive steps make sure your information and transactions are secure.</p></div>
            </div>
            <div className="flex flex-row">
              <div className="pt-12"><FontAwesomeIcon icon={faMoneyBillTransfer} size="2x" style={{color:'#3ecdea'}}  className="rounded-full bg-[#272727] p-[12px]"/></div>
              <div><p className="text-xl font-bold text-white pl-4 pt-10">Balance Transfer</p>
              <p className="text-xl text-[#e5e7eb] pr-16 pl-4">A balance transfer credit card can save you a lot of money in interest charges.</p></div></div>

            </div>
           
              
              
            </div>

        </div>
  )
}

export default Second