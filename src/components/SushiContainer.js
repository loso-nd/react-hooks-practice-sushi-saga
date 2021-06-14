import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer(props) {
  //deconstructing props passed in from parent
  let {sushis, index, setIndex} = props

  return (
  // iterate over arr of sushi and to return a single sushi with its associated properties passed in as props
    <div className="belt">
      {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} />)}
{/* Passed in index state and setIndex as props to MoreButton in order to show next 4 sushi */}
      <MoreButton index={index} setIndex={setIndex}/>
    </div>
  );
}

export default SushiContainer;
