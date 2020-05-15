//var React = require("react");
// import is the newest way to get a module in your program.

import React from "react";

//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

//ReactDOM.render(what to ShadowRoot, where to show it);
// div is needed if you need to show more than one Element
// at a timed
ReactDOM.render(
  <div>
    <h1>Hello world.</h1>
    <p>This is a new paragraph.!</p>
  </div>,
  document.getElementById("root")
);
