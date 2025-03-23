import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div  className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul  className={styles.links}>
        <li  className={styles.link}>
            <img src={"../../../assets/contact/emailIcon.png"}
            alt="Email.icon"/>
            <a href="mailto:hritykabhattarai@gmail.com">hritykabhattarai@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={"../../../assets/contact/linkedinIcon.png"}
            alt="linkedin.icon"/>
            <a href="https://www.linkedin.com/in/hritika-bhattarai-484037213">linkedin.com/in/hritika-bhattarai</a>
        </li>
        <li className={styles.link}>
            <img src={"../../../assets/contact/githubIcon.png"}
            alt="Github.icon"/>
            <a href="https://github.com/HritikaBhattarai">github.com/HritikaBhattarai</a>
        </li>
    </ul>
    </footer>
  )
};
