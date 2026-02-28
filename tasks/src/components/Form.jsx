/*5. Register Form 
a. Build a form to collect user information like name, email, and password. 
b. Make sure the form captures the input values and can display them on 
submission. */

import { useState } from "react";
const Form=()=>{
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const[msg,setMsg]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMsg(`name:${data.name}| email:${data.email}| password:${data.password}`)
    }
   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" name="name"onChange={handleChange} value={data.name}/>
                <input type="email" placeholder="Enter Email" name="email"onChange={handleChange} value={data.email}/>
                <input type="password" placeholder="Enter Password" name="password"onChange={handleChange} value={data.password}/>
                <button>submit</button>
            </form>
            <h1>{msg}</h1>

        </div>
    )
}
export default Form;

// const Form=()=>{
//     const [data,setData]=useState({
//         name:'',
//         email:"",
//         password:''
//     })

//     const handleChange=(e)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     let message="";
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         message=

//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="enter name" name="name" onChange={handleChange} value={data.name}/>
//                    <input type="email" placeholder="enter email" name="email" onChange={handleChange} />
//                       <input type="password" placeholder="enter padsword" name="password" onChange={handleChange} />        
//             </form>
//             <h1>{message}</h1>

//         </div>
//     )
// }
// export default Form