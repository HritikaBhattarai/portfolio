import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hritika</h1>
        <p className={styles.description}>
           I'm a developer with eagerness to bring innovative solutions and 
          enhance user experiences through thoughtful design and seamless functionality.
        </p>
        <a href="mailto:hritykabhattarai@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"../../../assets/hero/HeroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


