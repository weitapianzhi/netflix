import React from "react";
import Jumbotron from "./container/Jumbotron"
import Footer from "./container/Footer"
import Accordion from "./container/Accordion";
import "./global-styles/global.css";
function App() {
  return (
    <div className="App">
      <Jumbotron></Jumbotron>
      <Accordion></Accordion>
      <Footer></Footer>
    </div>
  );
}

export default App;
