import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "mainheading",
    customattr: "test",
    key: "h1k",
  },
  "Hello World"
);
const heading2 = React.createElement("h2", {}, "React Intro");

//JSX react element
const heading3 = <h3>heading 3</h3>;

const cont = React.createElement(
  "div",
  {
    id: "container",
    key: "h2k",
  },
  [heading, heading2, heading3]
);

//React componenets
//function components - NEW WAY
// Class components - OLD WAY

const LogoComponent = () => {
  return (
    <div>
      <span>LOGO</span>
    </div>
  );
};

let message = "Welcome";

//component composition
const HeaderComponent = () => {
  return (
    <div>
      {LogoComponent()}
      {message}
      {console.log(message)}
      <LogoComponent />
      {cont}
      <ul>
        <li>Home</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(cont);
root.render(<HeaderComponent />);
