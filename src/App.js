import React from "react";
// * importing components
import Navbar from "./components/Navbar";
// * importing styles
import "./styles/app.css";
// * importing pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
    </div>
  );
}

export default App;
