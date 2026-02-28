const List=()=>{

    const items=["apple","orange","pineapple","pine"];

    return(
        <div>
            <ul>
                {
                    items.map((e,i)=>(
                        <li key={i}>{e}</li>
                    ))
                }
            </ul>

        </div>
    )
}
export default List