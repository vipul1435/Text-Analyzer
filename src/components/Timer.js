import React,{useState} from 'react'

export default function Timer() {
    const [time,setTime]= useState(new Date().toLocaleTimeString());
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000)
  return (
    <div className="container my-2"><h6>Current time is {time}</h6></div>
  )
}
