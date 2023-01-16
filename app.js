import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "mainheading",
    customattr: "test",
  },
  "Hello World"
);
const heading2 = React.createElement("h2", {}, "React Intro");
const cont = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(cont);
