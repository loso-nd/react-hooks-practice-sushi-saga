import {React, useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
//Step 1: Define our state 
  let [sushis, setSushi] = useState([])
  let [index, setIndex] = useState(0);

//Step 2: Fetch sushi via useEffect which takes an anonyous func, and a dependency that tracks what we want. 
  useEffect( () => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushi(data.slice(index, index + 4))) // store data into our state and pass into <SushiContainer /> as a prop
    .catch(error => console.log("Error : ", error))
  }, [index])
  //[] it will run once, because we are not re-rendering anything
  //[param] it well run once, track the param inside and re-render

console.log (sushis);


  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        index={index} 
        setIndex={setIndex}/>
      <Table />
    </div>
  );
}

export default App;
