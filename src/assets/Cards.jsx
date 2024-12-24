import React from 'react'
const Cards = (props) => {
  return (
    
            <>
               <div className="flex flex-col gap-6 w-max  bg-[#272727] rounded-md">
                 <div className="flex justify-center"><p><img src="https://t3.ftcdn.net/jpg/02/87/04/00/360_F_287040077_U2ckmhpzeyqDHiybj0dfCfX6NRCEKdoe.jpg" className="w-[300px] h-[150px]"></img></p></div>
                 <div className="text-white text-[#e5e7eb]"><p><b>Sports_name:</b>{props.home_team}</p></div>
                 <div className="text-white"><p><b>Sports_title:</b>{props.sport_title}</p></div>
                 <div className="text-white"><p><b>Away_team:</b>{props.away_team}</p></div>

               </div>
            </>
        )
    }
  


export default Cards