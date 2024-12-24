import React from 'react'

const About = () => {
  return (
    <div className="bg-[#11101d] w-screen h-screen">
      <div className="flex  justify-center ">
      <div clasName="text-white bg-[#272727] flex flex-col  items-center">
        <p className="pt-10"><img src="https://www.vimarshaias.com/wp-content/uploads/2024/04/IAS.jpg" className="w-[200px] h-[150px] md:w-[300px] h-[200px]"></img></p>
      </div>
      </div>
      <div className="flex flex-col items-center">
        <div><p className="text-2xl font-bold text-white">Purpose of IAS</p></div>
        <div>
          <ul className="text-white pl-20">
            <li>Governance and Administration</li>
            <li>Policy Formulation and Execution</li>
            <li>Public Welfare</li>
            <li>Maintaining Law and Order</li>
            
            </ul>
        </div>

      </div>
    </div>
  )
}

export default About