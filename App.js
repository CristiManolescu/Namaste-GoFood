import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const Title = () => (
  <h1 className="title" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const Heading = () => (
  <div className="container">
    <Title />
    <h1>Aici avem o componentă</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
