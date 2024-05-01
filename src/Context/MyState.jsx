// MyState.js
import React, { useState } from "react";
import MyContext from "./MyContext";

function MyState(props) {
  const [mode, setMode] = useState('Light');

  const toggleMode = () => {
    setMode(mode === 'Light' ? 'Dark' : 'Light');
    document.body.style.backgroundColor = mode === 'Light' ? 'rgb(17, 24, 39)' : 'white';
  };

  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
