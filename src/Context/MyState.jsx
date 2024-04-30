import React from "react";
import MyContext from "./MyContext";

function MyState(props) {
  const state = {
    name: "sahil",
    roll_No: 11212509
  };
  return (
    <MyContext.Provider value={state}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
