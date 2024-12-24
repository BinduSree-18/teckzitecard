import React, { useState } from 'react'

const Counter = () => {
    let c=10
    const[count,newcount]=useState(0)
  return (
    <div className="flex justify-center items-center flex-row w-screen h-full">
        <p><button className="bg-red-500 p-[10px]"onClick={()=>{
            if(count>0){
                newcount(count-1)
            }
        }}>-</button></p>
        <p className="border border-2">{count}</p>
        <p><button className="bg-blue-500 p-[10px]"onClick={()=>{
            if(count<c){
                newcount(count+1)
            }
        }}>+</button></p>

    </div>
  )
}

export default Counter