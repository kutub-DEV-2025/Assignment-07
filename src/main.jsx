import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import TimelineProvider from "./context/TimelineContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TimelineProvider>
      <App />
      <ToastContainer position="top-right" autoClose={2000} />
    </TimelineProvider>
  </BrowserRouter>
);