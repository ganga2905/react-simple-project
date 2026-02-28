import { useState } from "react";

const Input=()=>{
    const[text,setText]=useState('')
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h1>{text&& <p>you win</p>}</h1>

        </div>
    )
}
export default Input;