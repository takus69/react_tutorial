import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import App2 from "./App2";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <h1>三目並べ</h1>
        <App />
        <h1>商品データテーブル</h1>
        <App2 />
    </StrictMode>
);