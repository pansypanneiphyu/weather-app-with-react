import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Pann and{" "}
          <a href="https://github.com/pansypanneiphyu/weather-app-with-react">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
