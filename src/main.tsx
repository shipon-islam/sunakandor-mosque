import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "regenerator-runtime/runtime";
import App from "./App.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
