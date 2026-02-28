import { useState } from "react"

const Show=()=>{
    const[show,setShow]=useState(true)

    return(
        <div>
            <button onClick={()=> setShow(!show)}>{show?"hide":"show"}</button>
            {
                show&& <p>welcome to the world</p>
            }

        </div>
    )
}
export default Show