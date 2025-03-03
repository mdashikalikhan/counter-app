import {useState} from "react";

function Counter({initialCount=0, maxLimit=20}){
    const[count, setCount] = useState(initialCount);

    return(
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h2>Counter App</h2>
            <h1>${count}</h1>
            <button onClick={()=> setCount(count+1)} disabled={count>=maxLimit}>+</button>
            <button onClick={()=> setCount(count-1)} disabled={count===0}>-</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <p style={{color:"red"}}>
                {count>=maxLimit && "Max Limit reached!"}
                {count===0 && "Minimum reached!"}
            </p>
        </div>
    );
}

export default Counter;