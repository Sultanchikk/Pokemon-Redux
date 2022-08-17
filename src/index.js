import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
