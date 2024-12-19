import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment , decrement,amount, reset} from "../src/utils/counter/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const [inputAmount , setInputAmount]=useState(0)
console.log(inputAmount)

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () =>{  
    dispatch(decrement())
  }

  const handleInput = () =>{
   dispatch(amount(inputAmount))
  }

  const handleReset = () =>{
    dispatch(reset())
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          width: 500,
          height: 500,
          borderRadius: 10,
          textAlign: "center",
        }}
      >
        <h1>Counter App</h1>
        <h1>{value}</h1>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button onClick={() => handleIncrement()} className="btn">
          Increment{" "}
          </button>
          <button onClick={() => handleDecrement()} className="btn">
          Decrement{" "}
          </button>
        </div>

        <div >
          <input className="input-field" placeholder="Enter number" type="number" onChange={(e)=> setInputAmount(e.target.value)} />
          <button onClick={() => handleInput()} className="btn">
          Change Value
          </button>

          
        </div>
        <div style={{margin : 50}}>
        <button onClick={() => handleReset()} className="btn">
          Reset Value
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
