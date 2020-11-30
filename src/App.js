import React, { useState } from "react";

import { Snackbar } from "./components";
import "./styles.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (!isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Open</button>
      <Snackbar
        positionY="top"
        positionX="right"
        backgroundColor="#4caf50"
        color="#fff"
        duration={3000}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
}
