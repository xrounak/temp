import React from "react";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.heading}>Ready to get started?</h2>
      <div className={styles.ctaGroup}>
        <button className={styles.ctaBtnPrimary}>Post a Task</button>
        <button className={styles.ctaBtnSecondary}>Start Earning</button>
      </div>
    </section>
  );
} 