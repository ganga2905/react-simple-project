import React, { useRef } from 'react'

const UseRef = () => {
    const inputD=useRef()
    const handleSubmit=()=>{
        console.log(inputD.current.value);
        
    }
  return (
    <div>
        <input type="text" ref={inputD} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default UseRef