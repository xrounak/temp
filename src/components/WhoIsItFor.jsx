import React from "react";
import styles from "./WhoIsItFor.module.css";

export default function WhoIsItFor() {
  return (
    <section className={styles.whoIsItFor}>
      <h2 className={styles.heading}>Who Is It For?</h2>
      <div className={styles.cardsGroup}>
        <div className={styles.card}>
          <span className={styles.icon}>🧑‍💼</span>
          <h3 className={styles.title}>For Clients</h3>
          <p className={styles.desc}>Find talented students to help with your projects, tasks, and more.</p>
          <button className={styles.ctaBtnPrimary}>Post a Task</button>
        </div>
        <div className={styles.card}>
          <span className={styles.icon}>🎓</span>
          <h3 className={styles.title}>For Students</h3>
          <p className={styles.desc}>Earn money, gain experience, and build your portfolio while studying.</p>
          <button className={styles.ctaBtnSecondary}>Start Earning</button>
        </div>
      </div>
    </section>
  );
} 