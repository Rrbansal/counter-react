import { useState } from "react";
import './Counter.css'
function Counter()
{
    let [x,setx]=useState(0);

    return(
        <div>
        <div className="maincounter">
        <div className="counter">
        <div>
        <h1>COUNT IS : {x}</h1>
        <br/>
        <button onClick={()=>setx(x+1)}>INCREMENT</button>
        <span>          </span>
        <button onClick={()=>setx(x-1)}>DECREMENT</button>
        </div>
        </div>
        </div></div>
    )


}
export default Counter