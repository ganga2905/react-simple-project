import React, { useReducer } from 'react'

const UseReducer = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case "increament":
                return{
                    count:state.count+1
                };
                case "decreament":
                    return{
                        count:state.count-1
                    }
                    default:
                        return state;
                            
        }


    }

    const [state,dispatch]=useReducer(reducer, {count:1} )
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increament"})}>+</button>
        <button onClick={()=>dispatch({type:'decreament'})}>-</button>


    </div>
  )
}

export default UseReducer