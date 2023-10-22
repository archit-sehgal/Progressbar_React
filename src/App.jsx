import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const[value,setValue]=useState(0)
  useEffect(()=>{
    const interval=setInterval(() => {
      setValue((val)=>val+1)
    }, 100);
    return()=>clearInterval(interval)
  })
  return (
    <div className="App">
      <span>Progress bar</span>
      <Progressbar value={value}/>
    </div>
  );
}
const Progressbar=({value})=>{
  const[percent,setPercent]=useState(value)
  useEffect(()=>{
    setPercent(Math.min(100,Math.max(value,0)))
  })
  return(
    <div className="Progress">
      <span style={{color:percent>49?"white":"black"}}>{percent.toFixed()}%</span>
      <div style={{width:`${percent}%`}}
      role="progressbar"
      area-valuemin={0}
      area-valuemax={100}
      area-valuenow={percent}
      ></div>
    </div>
  )
}

export default App;
