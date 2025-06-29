import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.contactContent}>
        <h2>Contact Me</h2>
        <hr />
        <div className={styles.box_one}></div>
        <p className={styles.page__paragraph_01}>
          I would love to hear from you — whether it is about a frontend
          project, internship opportunity, or just to say hi.
        </p>
        <div className={styles.contactSocials}>
          <a href="mailto:adelisa@example.com">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>adelisalicina@outlook.com</span>
          </a>
          <a href="https://github.com/AdelisaKolashinac" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> <span>AdelisaKolashinac</span>
          </a>
          <a
            href="www.linkedin.com/in/adelisa-kolashinac-9b7669212"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <span>Adelisa Kolashinac</span>
          </a>
          <div className={styles.box_two}></div>
        </div>
      </div>
    </div>
  );
}
