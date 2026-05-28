import React, { useState } from 'react'

const Hide = () => {

    const[data,setData]=useState('');

    const handleChange=()=>{
        setData(!data)
    }



  return (
    <>
    <h1>{data}</h1>
    <button onClick={handleChange}>{data?"hide":"show"}</button>

    </>
  )
}

export default Hide