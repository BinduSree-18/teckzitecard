import React,{useState} from 'react'

const Background = () => {
  const[product,newproduct]=useState("Realme8")
  return (
    <div className="flex justify-center iems-center flex-col">
        <h1>Backgroundcolor</h1>
        <input type="color"onChange={(e)=>{
            document.body.style.background=e.target.value
        }}></input>
        <h1 className="font-bold">All time dream IAS</h1>
        <p>Enter any product name </p>
        <p><input type="text"className="border border-black"id="colour"></input></p>
        <button className="bg-blue-500 p-[10px]" onClick={()=>{
          let pname=document.getElementById("colour").value
          newproduct(pname);
        }}>ChangeProduct</button>
        <p>{product}</p>
        <p>12000</p>

    </div>
  )
}
export default Background