import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogsData = [
  { name: "Nick", id: "1" },
  { name: "Mary", id: "2" },
  { name: "Arnold", id: "3" },
  { name: "Stella", id: "4" },
];
const messagesData = [
  { id: "1", message: "qwerqwerqwer" },
  { id: "2", message: "asdfasdfasdf" },
  { id: "3", message: "zxcvzxcvzxv" },
  { id: "4", message: "poipoipoipoi" },
];

const postsData = [
  { id: "1", name: "Nick", message: "abra-kadabra", likesCount: "12" },
  { id: "2", name: "Mary", message: "ahalai-mahalai", likesCount: "23" },
  { id: "3", name: "Arnold", message: "sim-salabim", likesCount: "2354" },
  { id: "4", name: "Sandrick", message: "kushudurum", likesCount: "123" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
