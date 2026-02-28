import React, { useState } from 'react'

const UseStates = () => {

    const [num,setNum]=useState(0)

    const handleIncrase=()=>{
      setNum((cur)=>cur+1)
    }
    const handleDecrese=()=>{
      setNum((cur)=>cur-1)
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={handleIncrase}> increase</button>
        <button onClick={handleDecrese} disabled={num==1}> decrease</button>

    </div>
  )
}

export default UseStates