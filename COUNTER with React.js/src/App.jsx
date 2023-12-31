import { useState } from "react";
import './App.css'
function App(){
    let [a,b]=useState(0)
    return(
        
        <>
       
       <div className="container">
        <div className="counter">
            <h1 className="display-1 text-dark">COUNTER</h1>
        <h1 className="mt-5">{a}</h1>
        
       <button onClick={()=>{b(a+1)}} className="btn btn-lg btn-danger rounded-top mt-5">Increment</button>
        <button onClick={()=>{b(a-1)}} className="btn btn-lg btn-success rounded-top mt-5">Decrement</button>
        <button onClick={()=>{b(a=0)}} className="btn btn-lg btn-warning rounded-top mt-5">Reset</button>
        </div>
       </div>
        </>
    )
}
export default App;