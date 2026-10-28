import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import "./index.css";
import App from "./App.jsx";

// Analytics runs only in production builds, so local development sends no events
if (import.meta.env.PROD) {
  ReactGA.initialize("G-T5ZPVHPDJW");

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
