import React from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import "./App.css";
import watermark from "./watermark.png";

function App() {
  return (
    <main className="App">
      <Header />
      <MainContent />
      {/* <img className="watermarkImg" src={watermark}></img> */}
    </main>
  );
}

export default App;
