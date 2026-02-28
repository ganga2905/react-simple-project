const DropDownCity=()=>{

    const data={
        india:["chennai","madurai","salem"],
        uk:["a","b","c"]
    }

    return(
        <div>
            <select name="" id="">
                <option value="">selected city</option>
                {   
                    Object.keys(data).map((c)=>(
                        <option key={c}>{c}

                        </option>

                    ))
                }

            </select>

        </div>
    )
}
export default DropDownCity;
{/* <select>
    <option value="">
        {
            Object.key(data).map(e=>(
                <option></option>
            ))
        }
    </option>
</select> */}