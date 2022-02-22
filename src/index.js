import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

reportWebVitals();
