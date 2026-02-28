import { useState } from "react";
import '../Counter/counter.css';

const CounterApp=()=>{

    const[count,setCount]=useState(0)

    const increament=()=>{
        setCount(count+1)
    }
    const decreament=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        
            <div className="container">
                   <div className="head">
                    <h3>Count:{count}</h3>
                   </div>
                   <div className="btn">
                    <button onClick={increament}>Increament</button>
                    <button onClick={decreament} disabled={count==0}>decreament</button>
                    <button onClick={reset}>Reset</button>

                   </div>
           </div>
    )
}
export default CounterApp;