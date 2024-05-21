import React from "react";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/index";
import Star from "./components/star";
import TabTest from "./components/customTages/tabtest";
import ModalTest from "./components/custom-modal-popup/modal-test";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Accordian />

      <RandomColor /> */}

      {/* <Star /> */}
      {/* <TabTest /> */}
      <ModalTest />
    </div>
  );
};

export default App;
