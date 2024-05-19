import ReactDom from "react-dom/client";
import React from "react";
import App from "./components/App";

import "./style/reset.css";
import "./style/index.css";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
