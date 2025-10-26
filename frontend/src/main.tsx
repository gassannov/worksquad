import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/global.css";   // <-- add this line

createRoot(document.getElementById("root")!).render(<App />);
