import React,{useState,useEffect} from 'react'
import Cards from './Cards'
import axios from 'axios'
const Datafetching = () => {
    const[val,setVal]=useState(0)
    const[values,setValues]=useState([])
    const[loading,setLoading]=useState(false)
    const fetchData=async()=>{
        setLoading(true)
        try{
            const response=await axios.get("https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=e0f733d4f4af263b0c29ca7f9cf1034b")
            if(response.status==200){
                setValues(response.data)
                console.log(response.data)
            }
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(loading){
        return(
            <div className="text-center">Data is loading</div>
        )
    }
  return (
    <div className="w-full flex mt-5 justify-center flex-wrap gap-6 p-4  font-semibold items-center min-h-screen bg-[#11101d]">
        {
        values.map((data)=>(
           <Cards key={data.id} sport_title={data.sport_title} home_team={data.home_team} away_team={data.away_team}/>
        ))
        }

    </div>
  )
}

export default Datafetching