import React,{useState} from 'react'
const Firstform = () => {
    const[text,setText]=useState("enter any value")
    const[theme,setTheme]=useState("black")
    const[colour,textcolor]=useState("white")
    const[full,setFullbgcolor]=useState("white")

    const uppercase=(event)=>{
      setText(event.target.value);
    }
    const handleupclick=()=>{
      console.log("convert to uppercase");
      setText(text.toUpperCase());
    }
    const changetheme=()=>{
      if(theme==="black"){
        setTheme("white");
       
      }
      else{
        setTheme("black");
       }
      if(colour==="white"){
        textcolor("black")
      }
      else{
        textcolor("white")
      }

    }
    const reducespaces=()=>{
      let onetext=text.split(/[ ]+/);
      setText(onetext.join(" "))
    }
    const changeColor=(color)=>{
      setFullbgcolor(color);
    }
    
                                                                                                                                                                               
  return (
    <div className="bg-black">
    <div className={`flex flex-row justify-between flex-row w-full bg-${full}-500 text-balck`}>
     <div className="text-blue-500 text-xl w-1/2"> IAS</div>
     <div className="flex flex justify-between w-1/2">
        <button className="bg-green-500"onClick={()=>changeColor("green")}>Green</button>
        <button className="bg-blue-500"onClick={()=>changeColor("blue")}>Blue</button>
        <button className="bg-red-500"onClick={()=>changeColor("red")}>red</button>
        <button className="bg-yellow-500"onClick={()=>changeColor("yellow")}>yellow</button>
        
      </div>
      </div>

        {/*<div className="font-bold">Name</div>
        <div><input type="text" name="Name" placeholder="Enter your name" value={text} onChange={handleonchange}></input></div>
        <div className="font-bold">Password</div>
        <div><input type="password" name="password" placeholder="enter your password"></input></div>
        <div>Hello     how are you i am fine what about you</div>*/}
        <div><textarea className={`w-[500px] h-[500px] border border-2 bg-${full}-500`}value={text} onChange={uppercase}></textarea></div>
        <button className="bg-blue-500 pt-2" onClick={handleupclick}>Click here</button>
        <button className="bg-red-500 pt-2 rounded-md ml-2" onClick={changetheme}>Themes</button>
    
        <p className="text-white">{text}</p>

    </div>
  ) 
}

export default Firstform