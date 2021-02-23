import React from "react";
import Header from "../Header/Header";
import styles from "./Dashboard.module.css";
import watermark2 from "./watermark2.png";

function Dashboard() {
  return (
    <main className={styles.dashboardContainer}>
      <Header />
      <img src={watermark2} className={styles.loginImg}></img>

      <button className={styles.loginButton}>Login</button>
    </main>
  );
}

export default Dashboard;
