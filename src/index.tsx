import ReactDom from "react-dom/client";
import React from "react";

import "./style/reset.css";
import "./style/index.css";
import App from "@src/components/App";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
