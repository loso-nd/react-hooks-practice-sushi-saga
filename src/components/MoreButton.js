import React from "react";

function MoreButton(props) {
let { index } = props //deconstructing props

//Create a cb func that handles the next 4 sushi when the button is clicked
  const addMoreSushi = () => {
    console.log("Button has been clicked.")
    props.setIndex(index + 4) //passed setIndex as props and passed in (state + 4) as the arg
  }

//added click method which takes cb and returns the adds more sushi to the conveyor belt
  return <button onClick={() => addMoreSushi()}>More sushi!</button>;
}

export default MoreButton;
