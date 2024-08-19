import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
