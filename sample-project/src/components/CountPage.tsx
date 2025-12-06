import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";


const CountPage = () => {
    const [count,setCount] = useState(0);
    const handleClick= () =>{
         setCount((prev)=>prev+1)
    }
    useEffect(()=>{
        const interval = setTimeout(()=>{
               console.log("Elon musk runs !!!")
        },2000)
        console.log("Component rendered")
        return () => clearInterval(interval)
        
    },[count]);
  return (
    <div>
      <CustomButton onClick={handleClick} text={count.toString()}/>
    </div>
  )
}

export default CountPage
