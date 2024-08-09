"use client";

import styles from "./page.module.css";
import ForecastPage from "./forecast/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <ForecastPage />
    </main>
  );
}
