import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

ReactDOM.render(
  <Welcome compiler="TypeScript" framework="React" />,
  document.getElementById("MoonLightCardApp")
);