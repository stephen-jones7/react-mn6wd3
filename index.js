//var React = require("react");
// import is the newest way to get a module in your program.

import React from "react";

//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
import './style.css';


//ReactDOM.render(what to ShadowRoot, where to show it);
// div is needed if you need to show more than one Element
// at a timed


const d = new Date();
const time = d.getHours()
const strMsg = "";
const customStyle = {
  color: "red"
}

if (time>0 && time < 12) {
  strMsg = "Good Morning";
  customStyle.color = "red";
} else if (time >12 && time < 18) {
  strMsg = "Good Afternoon";
  customStyle.color = "green";
} else {
  strMsg = "Good Evening";
  customStyle.color = "blue";
};


ReactDOM.render(
  <div>
    <h1 className="heading" style = {customStyle}>{strMsg}</h1>
    
  </div>,
  document.getElementById("root")
);
