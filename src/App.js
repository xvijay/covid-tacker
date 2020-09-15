import React from "react";
import "./App.css";

import MainContainer from "./Page/main";

function App() {
  return (
    <div className="App">
      <div style={{ padding: "1rem", fontSize: "2rem" }}>Covid Tracker</div>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
