import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <h2 className={styles.page__title}>Contact Me</h2>
        <hr />
        <p className={styles.page__paragraph}>
          I would love to hear from you — whether it is about a frontend
          project, internship opportunity, or just to say hi.
        </p>
        <div className={styles.contact__socials}>
          <a href="mailto:adelisalicina@outlook.com" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>adelisalicina@outlook.com</span>
          </a>
          <a
            href="https://github.com/AdelisaKolashinac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> <span>AdelisaKolashinac</span>
          </a>
          <a
            href="https://www.linkedin.com/in/adelisa-kolashinac-9b7669212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <span>Adelisa Kolashinac</span>
          </a>
          <div className={styles.page__box_two}></div>
        </div>
      </div>
    </div>
  );
}
