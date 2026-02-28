import { useState } from "react";

const Theme=()=>{
    const[data,setData]=useState(true)

    const handleTheme=()=>{
        setData(!data)

    }

    return(
        <div style={{backgroundColor:data?"white":"black", color:data?"black":"white"}}>
            <button onClick={handleTheme}>toggle</button>

        </div>
    )
}
export default Theme;