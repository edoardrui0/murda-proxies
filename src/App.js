import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import styles from "./App.module.css";
import watermark from "./watermark.png";
import Dashboard from "./Dashboard/Dashboard";

// function App() {
//   return (
//     <main className="App">
//       <Header />
//       <MainContent />
//       {/* <img className="watermarkImg" src={watermark}></img> */}
//     </main>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
