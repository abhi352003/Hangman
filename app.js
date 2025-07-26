import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./components/Games/index"
import './style/main.scss'

const App = () => {
  return <div>

    <Game/>

  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
