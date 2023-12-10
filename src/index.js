/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// We need this Provider to use RTK
import { Provider } from "react-redux";
// We create this store to give it to provider
import store from "./app/store";

import "./Index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
