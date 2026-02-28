import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[number,setNumber]=useState(0);
    const[dark,setDark]=useState(false);

    const doubleNumber=useMemo(()=>{
        return slowFunction(number)
    },[number])

    const themeStyles=useMemo(()=>{
        return{
            backgroundColor:dark?"black":"white",
            color:dark?"black":"white"
        }
    },[dark])


  return (
    <div>
        <input type='number'
         value={number}
          onChange={(e)=>setNumber(e.target.value)}/>
          <button onClick={()=>setDark((cur)=>!cur)}>Toggle Theme</button>
        
    </div>
  )
}

export default UseMemo