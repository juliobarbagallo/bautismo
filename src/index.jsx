import React from "react";
import ReactDOMClient from "react-dom/client";
import { IphoneProMax } from "./screens/IphoneProMax";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<IphoneProMax />);
