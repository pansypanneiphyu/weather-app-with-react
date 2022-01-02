import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Pann and{" "}
          <a href="https://github.com/pansypanneiphyu/weather-app-with-react">
            open-sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a href="https://cocky-albattani-ed7758.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
