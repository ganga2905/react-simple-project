import React, { useState } from 'react'

const UseRedux = () => {
    const[data,setData]=useState({
        name:'',
        age:"",
        email:"",
        contact:'',

    })

    const handleChange=(e)=>{
      const{name,value}=e.target
      setData((cur)=>{
        return {
            ...cur,
            [name]:value
        }
      })

    }
  return (
    <div>
        <form>
            <input type="text" name='name' placeholder='Name' value={data.name} onChange={handleChange} /> <br/>
             <input type="number" age='age' placeholder='age' value={data.age} onChange={handleChange}/> <br/>
              <input type="text" email="email" placeholder='Email' value={data.email}  onChange={handleChange}/> <br/>
               <input type="number" contact='contact' placeholder=' contact' value={data.contact}  onChange={handleChange}/> <br/>
               <button type='submit'>add</button>
        </form>


    </div>
  )
}

export default UseRedux