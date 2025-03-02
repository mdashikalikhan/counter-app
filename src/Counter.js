import {useState} from "react";

function Counter({initialCount=0}){
    const[count, setCount] = useState(initialCount);

    return(
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h2>Counter App</h2>
            <h1>${count}</h1>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
        </div>
    );
}

export default Counter;