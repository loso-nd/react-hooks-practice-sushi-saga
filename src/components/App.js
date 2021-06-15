import {React, useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {
//Step 1: Define our state 
  let [sushis, setSushi] = useState([]);
  let [index, setIndex] = useState(0);
  let [plates, setPlates] = useState([])
  let [wallet, setWallet] = useState(100);
 

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

  //cb fnc that is passed up from the child ( Sushi) to the Parent and then passed as props to the child ( Table) 
  //Also pass in the id & price which lets us know which plate was removed from the conveyor belt
  const OnSushiClick = (id, price) =>{
    console.log(id, price)

    //we want to update the plate arr with the id, price from the rmovded plate <Sushi /> .
  // we updated the plates state by using the spread op and passincg in the placeholder ( id or price) is set setPlates with the updatedPlates as an arg
    const updatedPlate = [...plates, id]
    setPlates(updatedPlate)

    setWallet(wallet-price)
  }


  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis} 
        index={index} 
        setIndex={setIndex}
        OnSushiClick={OnSushiClick}
        wallet={wallet}/>
      <Table 
        plates={plates}
        wallet={wallet}
      />
    </div>
  );
}

export default App;
