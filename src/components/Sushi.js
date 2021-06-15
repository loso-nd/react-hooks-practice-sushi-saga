import {React, useState} from "react";

function Sushi(props) {
  let {img_url, name, price, id} = props.sushi
  

 let [isSushiEaten, setIsSushiEaten] = useState(false)

 //Func to remove sushi from the conveyor belt
 const handleSushiClick = () => {
  setIsSushiEaten(true)
console.log(price)
console.log(props.wallet)
  //We need to pass info of the plates that has been removed from the conveyor belt and add the plate to the table
  props.OnSushiClick(id, price)
 }


  return (
    <div className="sushi">

      {props.wallet < price ? 
      
      (<div className="plate">
        {isSushiEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div> )
      :
      ( <div className="plate" onClick={() => handleSushiClick()}>
      {isSushiEaten ? null : (
        <img
          src={img_url}
          alt={name}
          width="100%"
        />
      )}
    </div> )
}
     <h4 className="sushi-details">
        {name} - ${price}
      </h4> 
    </div> 
  );
}

export default Sushi;
